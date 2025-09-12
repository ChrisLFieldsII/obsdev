import { Command } from '@oclif/core'
import { OBSWebSocket } from 'obs-websocket-js'

import { createExample } from '../utils.js'

export default class StopRecord extends Command {
  static override args = {}
  static override description = 'Stop an OBS recording'
  static override examples = [createExample()]
  static override flags = {}

  public async run(): Promise<void> {
    const obs = new OBSWebSocket()

    try {
      await obs.connect('ws://127.0.0.1:4455', process.env.OBS_WS_PASSWORD)

      // NOTE: errors if there is no recording
      await obs.call('StopRecord')
    } catch (error) {
    } finally {
      await obs.disconnect()
      this.log('Recording stopped')
    }
  }
}
