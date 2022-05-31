export const save = (publicMethods, model, api) => async () => {
  const action = model.id ? 'update' : 'create'
  const request = await api[action](model)

  return request.isOK
    ? publicMethods
    : { isOk: request.isOk, status: request.status, error: request.error }
}

export default save
