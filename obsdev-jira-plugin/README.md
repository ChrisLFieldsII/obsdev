# obsdev-jira-plugin

# Docs

A plugin for [obsdev](https://www.npmjs.com/package/obsdev) that uploads saved videos to JIRA ticket

Add by running `obsdev plugins install obsdev-jira-plugin`

Works by using regex to grab JIRA ticket ID (PROJ-1234) from video path. Branch names should follow this convention: `feat/PROJ-1234` so video path has JIRA ticket ID. JIRA project key is expected to be all caps.

- Relevant JIRA API: https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-attachments/#api-rest-api-3-issue-issueidorkey-attachments-post

# Required Environment Variables

- JIRA_DOMAIN
  - Ex: companyname
  - Do not include .atlassian.net
- JIRA_EMAIL
- JIRA_API_TOKEN

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/obsdevjiraplugin.svg)](https://npmjs.org/package/obsdevjiraplugin)
[![Downloads/week](https://img.shields.io/npm/dw/obsdevjiraplugin.svg)](https://npmjs.org/package/obsdevjiraplugin)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g obsdev-plugin-jira
$ obsdev-plugin-jira COMMAND
running command...
$ obsdev-plugin-jira (--version)
obsdev-plugin-jira/0.0.0-test.5 linux-x64 node-v20.19.5
$ obsdev-plugin-jira --help [COMMAND]
USAGE
  $ obsdev-plugin-jira COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`obsdev-plugin-jira help [COMMAND]`](#obsdev-plugin-jira-help-command)
- [`obsdev-plugin-jira plugins`](#obsdev-plugin-jira-plugins)
- [`obsdev-plugin-jira plugins add PLUGIN`](#obsdev-plugin-jira-plugins-add-plugin)
- [`obsdev-plugin-jira plugins:inspect PLUGIN...`](#obsdev-plugin-jira-pluginsinspect-plugin)
- [`obsdev-plugin-jira plugins install PLUGIN`](#obsdev-plugin-jira-plugins-install-plugin)
- [`obsdev-plugin-jira plugins link PATH`](#obsdev-plugin-jira-plugins-link-path)
- [`obsdev-plugin-jira plugins remove [PLUGIN]`](#obsdev-plugin-jira-plugins-remove-plugin)
- [`obsdev-plugin-jira plugins reset`](#obsdev-plugin-jira-plugins-reset)
- [`obsdev-plugin-jira plugins uninstall [PLUGIN]`](#obsdev-plugin-jira-plugins-uninstall-plugin)
- [`obsdev-plugin-jira plugins unlink [PLUGIN]`](#obsdev-plugin-jira-plugins-unlink-plugin)
- [`obsdev-plugin-jira plugins update`](#obsdev-plugin-jira-plugins-update)

## `obsdev-plugin-jira help [COMMAND]`

Display help for obsdev-plugin-jira.

```
USAGE
  $ obsdev-plugin-jira help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for obsdev-plugin-jira.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `obsdev-plugin-jira plugins`

List installed plugins.

```
USAGE
  $ obsdev-plugin-jira plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ obsdev-plugin-jira plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `obsdev-plugin-jira plugins add PLUGIN`

Installs a plugin into obsdev-plugin-jira.

```
USAGE
  $ obsdev-plugin-jira plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into obsdev-plugin-jira.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OBSDEV_PLUGIN_JIRA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OBSDEV_PLUGIN_JIRA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ obsdev-plugin-jira plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ obsdev-plugin-jira plugins add myplugin

  Install a plugin from a github url.

    $ obsdev-plugin-jira plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ obsdev-plugin-jira plugins add someuser/someplugin
```

## `obsdev-plugin-jira plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ obsdev-plugin-jira plugins inspect PLUGIN...

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
  $ obsdev-plugin-jira plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `obsdev-plugin-jira plugins install PLUGIN`

Installs a plugin into obsdev-plugin-jira.

```
USAGE
  $ obsdev-plugin-jira plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into obsdev-plugin-jira.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OBSDEV_PLUGIN_JIRA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OBSDEV_PLUGIN_JIRA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ obsdev-plugin-jira plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ obsdev-plugin-jira plugins install myplugin

  Install a plugin from a github url.

    $ obsdev-plugin-jira plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ obsdev-plugin-jira plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `obsdev-plugin-jira plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ obsdev-plugin-jira plugins link PATH [-h] [--install] [-v]

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
  $ obsdev-plugin-jira plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `obsdev-plugin-jira plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ obsdev-plugin-jira plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ obsdev-plugin-jira plugins unlink
  $ obsdev-plugin-jira plugins remove

EXAMPLES
  $ obsdev-plugin-jira plugins remove myplugin
```

## `obsdev-plugin-jira plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ obsdev-plugin-jira plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `obsdev-plugin-jira plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ obsdev-plugin-jira plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ obsdev-plugin-jira plugins unlink
  $ obsdev-plugin-jira plugins remove

EXAMPLES
  $ obsdev-plugin-jira plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `obsdev-plugin-jira plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ obsdev-plugin-jira plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ obsdev-plugin-jira plugins unlink
  $ obsdev-plugin-jira plugins remove

EXAMPLES
  $ obsdev-plugin-jira plugins unlink myplugin
```

## `obsdev-plugin-jira plugins update`

Update installed plugins.

```
USAGE
  $ obsdev-plugin-jira plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_

<!-- commandsstop -->
