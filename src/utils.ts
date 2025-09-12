export function createExample(example: string) {
  return `<%= config.bin %> <%= command.id %> ${example}`
}
