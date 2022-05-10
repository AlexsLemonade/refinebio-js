import { makeRequest } from 'utils/makeRequest'

export const getActions = (config, path, pk = 'id') => {
  return {
    create: (data) =>
      makeRequest(config, `${path}/`, {
        method: 'POST',
        body: JSON.stringify(data)
      }),
    get: (id) =>
      id
        ? makeRequest(config, `${path}/${id}`)
        : makeRequest(config, `${path}`),
    filter: (query = {}) => makeRequest(config, `${path}`, query),
    update: (data) => {
      return makeRequest(config, `${path}/${data[pk]}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      })
    },
    delete: (id) => makeRequest(config, `${path}/${id}`)
  }
}

export default getActions
