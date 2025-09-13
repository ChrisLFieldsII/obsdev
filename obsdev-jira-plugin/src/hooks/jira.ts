const hook = async function (evt: { path: string }) {
  const { path } = evt
  console.log(`jira hook called with path: ${path}`)
}

export default hook
