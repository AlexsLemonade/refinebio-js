export const save =
  ({ publicInterface, model, api, set }) =>
  async () => {
    const action = model.id ? 'update' : 'create'
    const request = await api[action](model)

    if (request.isOK) {
      Object.entries(request.response).forEach(([k, v]) => {
        set(k, v)
      })

      return publicInterface
    }
    return { isOk: request.isOk, status: request.status, error: request.error }
  }

export default save
