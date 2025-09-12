import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('stop-record', () => {
  it('runs stop-record cmd', async () => {
    const {stdout} = await runCommand('stop-record')
    expect(stdout).to.contain('hello world')
  })

  it('runs stop-record --name oclif', async () => {
    const {stdout} = await runCommand('stop-record --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
