import {Args, Command, Flags} from '@oclif/core'

export default class Record extends Command {
  static override args = {
    filename: Args.string({description: 'filename for saved recording with no extension'}),
  }
  static override description = 'describe the command here'
  static override examples = ['<%= config.bin %> <%= command.id %>']
  static override flags = {
    dryRun: Flags.boolean({char: 'd', description: 'Print what would happen but take no action'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Record)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/christopher.fieldsii/Documents/projects/obsdev/src/commands/record.ts`)
    if (args.filename && flags.force) {
      this.log(`you input --force and --filename: ${args.filename}`)
    }
  }
}
