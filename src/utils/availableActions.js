const actions = ['create', 'get', 'filter', 'update', 'delete']

export const availableActions = (resource) => {
  const defaultActions = {}
  actions.forEach((action) => {
    defaultActions[action] = () =>
      console.error(`${resource} does not support ${action.toUpperCase()}`)
  })

  return defaultActions
}

export default availableActions
