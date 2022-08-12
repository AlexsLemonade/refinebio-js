import { makeRequest } from 'utils/makeRequest'

export const getActions = (config, path, pk = 'id') => {
  return {
    create: (data) =>
      makeRequest(config, `${path}`, {
        method: 'POST',
        body: JSON.stringify(data)
      }),
    get: (id = '', query = {}) =>
      makeRequest(config, `${path}/${id}`, { method: 'GET' }, query),
    filter: (query = {}) =>
      makeRequest(
        config,
        `${path}`,
        {
          method: 'GET'
        },
        query
      ),
    update: (data) => {
      return makeRequest(config, `${path}/${data[pk]}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      })
    },
    delete: (id) =>
      makeRequest(config, `${path}/${id}`, {
        method: 'DELETE'
      })
  }
}

export default getActions
