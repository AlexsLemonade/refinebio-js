import { makeRequest } from 'utils/makeRequest'

export const getActions = (config, path, pk = 'id') => {
  return {
    create: (data) =>
      makeRequest(config, `${path}/`, {
        method: 'POST',
        body: JSON.stringify(data)
      }),
    get: (id, type = '') => {
      if (!id && type) {
        // jobs - jobs/type
        return makeRequest(config, `${path}/${type}`)
      }

      if (id) {
        // jobs - jobs/type/id
        return type
          ? makeRequest(config, `${path}/${type}/${id}`)
          : makeRequest(config, `${path}/${id}`)
      }

      return makeRequest(config, `${path}`)
    },
    filter: (query = {}, type = '') =>
      !type
        ? makeRequest(config, `${path}`, query)
        : makeRequest(config, `${path}/${type}`, query),
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
