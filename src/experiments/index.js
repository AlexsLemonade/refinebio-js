import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const experiments = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (accessionCode) => makeRequest(config, `experiments/${accessionCode}`),
    filter: (query = {}) => makeRequest(config, `experiments/`, query)
  }
}

export default experiments
