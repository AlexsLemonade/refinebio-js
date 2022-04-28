import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const processors = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id) => makeRequest(config, `processors/${id}`),
    filter: (query = {}) => makeRequest(config, `processors/`, query)
  }
}

export default processors
