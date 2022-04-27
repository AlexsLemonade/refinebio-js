import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const dataset = (config = defaultConfig) => {
  return {
    ...availableActions,
    create: (data) =>
      makeRequest(config, 'dataset/', {
        method: 'POST',
        body: JSON.stringify(data)
      }),
    get: (id) => makeRequest(config, `dataset/${id}/`),
    update: (id, data) => {
      return makeRequest(config, `dataset/${id}/`, {
        method: 'PUT',
        body: JSON.stringify(data)
      })
    }
  }
}

export default dataset
