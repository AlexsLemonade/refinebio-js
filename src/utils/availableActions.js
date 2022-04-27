export const availableActions = {
  create: () => console.error('This resource does not support CREATE'),
  get: () => console.error('This resource does not support GET'),
  filter: () => console.error('This resource does not support FILTER'),
  update: () => console.error('This resource does not support UPDATE'),
  delete: () => console.error('This resource does not support DELETE')
}

export default availableActions
