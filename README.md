# obsdev

Automate use of OBS recordings to help document development workflows with audio/video

Use `obsdev record $recordingName` within a git repo to start recording and then stop the recording via OBS or `obsdev stop-record`.

## Installation

```sh
# install/update obsdev
$ npm install -g obsdev

# install and use JIRA plugin
$ obsdev plugins install obsdev-plugin-jira

# view how to manage plugins
$ obsdev help plugins
```

## Further documentation

Please refer to the README.md in following directories to find more info

- [obsdev](./obsdev/README.md)
  - Main CLI documentation. You may also run `obsdev help`
- [obsdev-plugin-jira](./obsdev-jira-plugin/README.md)
  - JIRA plugin to automatically upload saved videos to relevant JIRA ticket
