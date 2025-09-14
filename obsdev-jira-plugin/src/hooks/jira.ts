import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'node:fs'
import path from 'node:path'

const hook = async function (evt: { dryRun?: boolean; path: string }) {
  const { dryRun = false, path: filepath } = evt
  console.log(`jira hook called with path: ${filepath}`)

  const { JIRA_API_TOKEN, JIRA_DOMAIN, JIRA_EMAIL } = process.env

  if (!JIRA_DOMAIN || !JIRA_EMAIL || !JIRA_API_TOKEN) {
    console.warn(
      'JIRA_DOMAIN, JIRA_EMAIL, or JIRA_API_TOKEN environment variables not set, skipping upload to Jira'
    )
    return
  }

  const jiraTicketRegex = /[A-Z]+-\d+/
  const regexRes = jiraTicketRegex.exec(
    path.basename(path.parse(filepath).dir) // grab last directory in path which should be branch name. expects branch name to have jira id at start like feat/JIRA-123-description
  )

  if (!regexRes) {
    console.warn('No Jira ticket ID found in path, skipping upload to Jira')
    return
  }

  const jiraTicketId = regexRes[0]
  console.log(`Found Jira ticket ID: ${jiraTicketId}`)

  if (!dryRun) {
    const form = new FormData()
    const stats = fs.statSync(filepath)
    const fileSizeInBytes = stats.size
    const fileStream = fs.createReadStream(filepath)

    form.append('file', fileStream, {
      knownLength: fileSizeInBytes,
    })

    fetch(
      `https://${JIRA_DOMAIN}.atlassian.net/rest/api/3/issue/${jiraTicketId}/attachments`,
      {
        body: form,
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${Buffer.from(
            `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
          ).toString('base64')}`,
          'X-Atlassian-Token': 'no-check',
          ...form.getHeaders(),
        },
        method: 'POST',
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Failed to upload attachment to Jira: ${res.statusText}`
          )
        }

        return res.json()
      })
      .then((json) => {
        console.log('Successfully uploaded attachment to Jira:', json)
      })
      .catch((error) => {
        console.error('Error uploading attachment to Jira:', error)
      })
  }
}

export default hook
