obsdev
=================

Automate use of OBS recordings to help document development workflows with audio/video


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/obsdev.svg)](https://npmjs.org/package/obsdev)
[![Downloads/week](https://img.shields.io/npm/dw/obsdev.svg)](https://npmjs.org/package/obsdev)


<!-- toc -->
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
obsdev/0.0.0 darwin-arm64 node-v22.13.0
$ obsdev --help [COMMAND]
USAGE
  $ obsdev COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`obsdev hello PERSON`](#obsdev-hello-person)
* [`obsdev hello world`](#obsdev-hello-world)
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

## `obsdev hello PERSON`

Say hello

```
USAGE
  $ obsdev hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ obsdev hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/projects/obsdev/blob/v0.0.0/src/commands/hello/index.ts)_

## `obsdev hello world`

Say hello world

```
USAGE
  $ obsdev hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ obsdev hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/projects/obsdev/blob/v0.0.0/src/commands/hello/world.ts)_

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
<!-- commandsstop -->
