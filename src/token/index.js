import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const token = (config = defaultConfig) => {
  return {
    ...availableActions,
    create: (apiToken) =>
      makeRequest(config, 'token/', {
        method: 'POST',
        body: JSON.stringify(apiToken)
      }),
    get: (id) => makeRequest(config, `token/${id}/`),
    update: (id, apiToken) => {
      return makeRequest(config, `token/${id}/`, {
        method: 'PUT',
        body: JSON.stringify(apiToken)
      })
    }
  }
}

export default token
