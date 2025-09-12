import { Args, Command, Flags } from '@oclif/core'
import { execSync } from 'node:child_process'
import { mkdirSync, renameSync } from 'node:fs'
import { parse as parsePath, resolve as resolvePath } from 'node:path'
import { OBSWebSocket } from 'obs-websocket-js'

import { createExample } from '../utils.js'

export default class Record extends Command {
  static override args = {
    filename: Args.string({
      description: 'filename for saved recording with no extension',
    }),
  }
  static override description = 'Start an OBS recording'
  static override examples = [createExample('-d demo-1')]
  static override flags = {
    dryRun: Flags.boolean({
      char: 'd',
      description: 'Print what would happen but take no action',
    }),
  }

  public async run(): Promise<void> {
    return new Promise((resolve) => {
      ;(async () => {
        try {
          const { args, flags } = await this.parse(Record)

          const obs = new OBSWebSocket()

          const isDryRun = flags.dryRun
          const filename = args.filename ?? ''

          if (!filename) {
            throw new Error('Failed to provide filename')
          }

          const branch = execSync('git rev-parse --abbrev-ref HEAD', {
            encoding: 'utf8',
          })
            .trim()
            .replaceAll('/', '-') // normalize branch name to prevent nested dirs

          const gitDir = execSync('git rev-parse --show-toplevel', {
            encoding: 'utf8',
          }).trim()
          const projName = parsePath(gitDir).name

          // Connect to localhost with password
          await obs.connect('ws://127.0.0.1:4455', process.env.OBS_WS_PASSWORD)

          // get original record directory (Where recordings are stored)
          const { recordDirectory: ogRecordDirectory } = await obs.call(
            'GetRecordDirectory'
          )
          const saveRecordDirectory = resolvePath(
            ogRecordDirectory,
            projName,
            branch
          )
          const savePath = resolvePath(saveRecordDirectory, `${filename}.mp4`)

          this.logJson({
            branch,
            ogRecordDirectory,
            savePath,
            saveRecordDirectory,
          })

          const exit = async () => {
            await obs.disconnect()
            this.log('Successfully exited')
            resolve()
          }

          // create directory to save recording and change where obs saves recording to it
          // eslint-disable-next-line unicorn/no-negated-condition
          if (!isDryRun) {
            mkdirSync(saveRecordDirectory, { recursive: true })
            await obs.call('SetRecordDirectory', {
              recordDirectory: saveRecordDirectory,
            })

            await obs.call('StartRecord')
            this.log('Recording started')

            obs.on('RecordStateChanged', async (evt) => {
              this.logJson(evt)
              if (evt.outputState === 'OBS_WEBSOCKET_OUTPUT_STOPPED') {
                if (evt.outputActive === false && evt.outputPath) {
                  // change file name
                  renameSync(evt.outputPath, savePath)
                  this.log(`Video saved at ${savePath}`)

                  execSync(`open ${savePath}`) // NOTE: not cx
                }

                await obs.call('SetRecordDirectory', {
                  recordDirectory: ogRecordDirectory,
                })
                await exit()
              }
            })
          } else {
            await exit()
          }
        } catch (error) {
          this.error(`Unexpected error occurred: ${error}`)
        }
      })()
    })
  }
}
