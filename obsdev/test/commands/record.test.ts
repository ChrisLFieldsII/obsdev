import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('record', () => {
  it('runs record cmd', async () => {
    const {stdout} = await runCommand('record')
    expect(stdout).to.contain('hello world')
  })

  it('runs record --name oclif', async () => {
    const {stdout} = await runCommand('record --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
