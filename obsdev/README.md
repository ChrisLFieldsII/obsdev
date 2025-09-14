# obsdev

Automate use of OBS recordings to help document development workflows with audio/video

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/obsdev.svg)](https://npmjs.org/package/obsdev)
[![Downloads/week](https://img.shields.io/npm/dw/obsdev.svg)](https://npmjs.org/package/obsdev)

<!-- toc -->
* [obsdev](#obsdev)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g obsdev
$ obsdev COMMAND
running command...
$ obsdev (--version)
obsdev/1.1.3 linux-x64 node-v20.19.5
$ obsdev --help [COMMAND]
USAGE
  $ obsdev COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`obsdev help [COMMAND]`](#obsdev-help-command)
* [`obsdev plugins`](#obsdev-plugins)
* [`obsdev plugins add PLUGIN`](#obsdev-plugins-add-plugin)
* [`obsdev plugins:inspect PLUGIN...`](#obsdev-pluginsinspect-plugin)
* [`obsdev plugins install PLUGIN`](#obsdev-plugins-install-plugin)
* [`obsdev plugins link PATH`](#obsdev-plugins-link-path)
* [`obsdev plugins remove [PLUGIN]`](#obsdev-plugins-remove-plugin)
* [`obsdev plugins reset`](#obsdev-plugins-reset)
* [`obsdev plugins uninstall [PLUGIN]`](#obsdev-plugins-uninstall-plugin)
* [`obsdev plugins unlink [PLUGIN]`](#obsdev-plugins-unlink-plugin)
* [`obsdev plugins update`](#obsdev-plugins-update)
* [`obsdev record [FILENAME]`](#obsdev-record-filename)
* [`obsdev stop-record`](#obsdev-stop-record)
* [`obsdev update [CHANNEL]`](#obsdev-update-channel)
* [`obsdev version`](#obsdev-version)

## `obsdev help [COMMAND]`

Display help for obsdev.

```
USAGE
  $ obsdev help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for obsdev.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `obsdev plugins`

List installed plugins.

```
USAGE
  $ obsdev plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ obsdev plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `obsdev plugins add PLUGIN`

Installs a plugin into obsdev.

```
USAGE
  $ obsdev plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into obsdev.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OBSDEV_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OBSDEV_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ obsdev plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ obsdev plugins add myplugin

  Install a plugin from a github url.

    $ obsdev plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ obsdev plugins add someuser/someplugin
```

## `obsdev plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ obsdev plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ obsdev plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `obsdev plugins install PLUGIN`

Installs a plugin into obsdev.

```
USAGE
  $ obsdev plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into obsdev.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OBSDEV_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OBSDEV_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ obsdev plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ obsdev plugins install myplugin

  Install a plugin from a github url.

    $ obsdev plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ obsdev plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `obsdev plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ obsdev plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ obsdev plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `obsdev plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ obsdev plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ obsdev plugins unlink
  $ obsdev plugins remove

EXAMPLES
  $ obsdev plugins remove myplugin
```

## `obsdev plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ obsdev plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `obsdev plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ obsdev plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ obsdev plugins unlink
  $ obsdev plugins remove

EXAMPLES
  $ obsdev plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `obsdev plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ obsdev plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ obsdev plugins unlink
  $ obsdev plugins remove

EXAMPLES
  $ obsdev plugins unlink myplugin
```

## `obsdev plugins update`

Update installed plugins.

```
USAGE
  $ obsdev plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_

## `obsdev record [FILENAME]`

Start an OBS recording

```
USAGE
  $ obsdev record [FILENAME] [-d]

ARGUMENTS
  FILENAME  filename for saved recording with no extension

FLAGS
  -d, --dryRun  Print what would happen but take no action

DESCRIPTION
  Start an OBS recording

EXAMPLES
  $ obsdev record -d demo-1
```

_See code: [src/commands/record.ts](https://github.com/ChrisLFieldsII/obsdev/blob/v1.1.3/src/commands/record.ts)_

## `obsdev stop-record`

Stop an OBS recording

```
USAGE
  $ obsdev stop-record

DESCRIPTION
  Stop an OBS recording

EXAMPLES
  $ obsdev stop-record
```

_See code: [src/commands/stop-record.ts](https://github.com/ChrisLFieldsII/obsdev/blob/v1.1.3/src/commands/stop-record.ts)_

## `obsdev update [CHANNEL]`

update the obsdev CLI

```
USAGE
  $ obsdev update [CHANNEL] [--force |  | [-a | -v <value> | -i]] [-b ]

FLAGS
  -a, --available        See available versions.
  -b, --verbose          Show more details about the available versions.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
      --force            Force a re-download of the requested version.

DESCRIPTION
  update the obsdev CLI

EXAMPLES
  Update to the stable channel:

    $ obsdev update stable

  Update to a specific version:

    $ obsdev update --version 1.0.0

  Interactively select version:

    $ obsdev update --interactive

  See available versions:

    $ obsdev update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v4.7.4/src/commands/update.ts)_

## `obsdev version`

```
USAGE
  $ obsdev version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v2.2.32/src/commands/version.ts)_
<!-- commandsstop -->
