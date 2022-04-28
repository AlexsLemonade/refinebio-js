import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const samples = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (accessionCode) => makeRequest(config, `samples/${accessionCode}`),
    filter: (query = {}) => makeRequest(config, `samples/`, query)
  }
}

export default samples
