obsdevjiraplugin
=================

A plugin for obsdev that uploads saved videos to JIRA ticket


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/obsdevjiraplugin.svg)](https://npmjs.org/package/obsdevjiraplugin)
[![Downloads/week](https://img.shields.io/npm/dw/obsdevjiraplugin.svg)](https://npmjs.org/package/obsdevjiraplugin)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g obsdevjiraplugin
$ obsdevjiraplugin COMMAND
running command...
$ obsdevjiraplugin (--version)
obsdevjiraplugin/0.0.0-test.4 linux-x64 node-v20.19.5
$ obsdevjiraplugin --help [COMMAND]
USAGE
  $ obsdevjiraplugin COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`obsdevjiraplugin help [COMMAND]`](#obsdevjiraplugin-help-command)
* [`obsdevjiraplugin plugins`](#obsdevjiraplugin-plugins)
* [`obsdevjiraplugin plugins add PLUGIN`](#obsdevjiraplugin-plugins-add-plugin)
* [`obsdevjiraplugin plugins:inspect PLUGIN...`](#obsdevjiraplugin-pluginsinspect-plugin)
* [`obsdevjiraplugin plugins install PLUGIN`](#obsdevjiraplugin-plugins-install-plugin)
* [`obsdevjiraplugin plugins link PATH`](#obsdevjiraplugin-plugins-link-path)
* [`obsdevjiraplugin plugins remove [PLUGIN]`](#obsdevjiraplugin-plugins-remove-plugin)
* [`obsdevjiraplugin plugins reset`](#obsdevjiraplugin-plugins-reset)
* [`obsdevjiraplugin plugins uninstall [PLUGIN]`](#obsdevjiraplugin-plugins-uninstall-plugin)
* [`obsdevjiraplugin plugins unlink [PLUGIN]`](#obsdevjiraplugin-plugins-unlink-plugin)
* [`obsdevjiraplugin plugins update`](#obsdevjiraplugin-plugins-update)

## `obsdevjiraplugin help [COMMAND]`

Display help for obsdevjiraplugin.

```
USAGE
  $ obsdevjiraplugin help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for obsdevjiraplugin.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `obsdevjiraplugin plugins`

List installed plugins.

```
USAGE
  $ obsdevjiraplugin plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ obsdevjiraplugin plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/index.ts)_

## `obsdevjiraplugin plugins add PLUGIN`

Installs a plugin into obsdevjiraplugin.

```
USAGE
  $ obsdevjiraplugin plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into obsdevjiraplugin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OBSDEVJIRAPLUGIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OBSDEVJIRAPLUGIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ obsdevjiraplugin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ obsdevjiraplugin plugins add myplugin

  Install a plugin from a github url.

    $ obsdevjiraplugin plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ obsdevjiraplugin plugins add someuser/someplugin
```

## `obsdevjiraplugin plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ obsdevjiraplugin plugins inspect PLUGIN...

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
  $ obsdevjiraplugin plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/inspect.ts)_

## `obsdevjiraplugin plugins install PLUGIN`

Installs a plugin into obsdevjiraplugin.

```
USAGE
  $ obsdevjiraplugin plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into obsdevjiraplugin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OBSDEVJIRAPLUGIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OBSDEVJIRAPLUGIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ obsdevjiraplugin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ obsdevjiraplugin plugins install myplugin

  Install a plugin from a github url.

    $ obsdevjiraplugin plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ obsdevjiraplugin plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/install.ts)_

## `obsdevjiraplugin plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ obsdevjiraplugin plugins link PATH [-h] [--install] [-v]

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
  $ obsdevjiraplugin plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/link.ts)_

## `obsdevjiraplugin plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ obsdevjiraplugin plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ obsdevjiraplugin plugins unlink
  $ obsdevjiraplugin plugins remove

EXAMPLES
  $ obsdevjiraplugin plugins remove myplugin
```

## `obsdevjiraplugin plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ obsdevjiraplugin plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/reset.ts)_

## `obsdevjiraplugin plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ obsdevjiraplugin plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ obsdevjiraplugin plugins unlink
  $ obsdevjiraplugin plugins remove

EXAMPLES
  $ obsdevjiraplugin plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/uninstall.ts)_

## `obsdevjiraplugin plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ obsdevjiraplugin plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ obsdevjiraplugin plugins unlink
  $ obsdevjiraplugin plugins remove

EXAMPLES
  $ obsdevjiraplugin plugins unlink myplugin
```

## `obsdevjiraplugin plugins update`

Update installed plugins.

```
USAGE
  $ obsdevjiraplugin plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/update.ts)_
<!-- commandsstop -->
