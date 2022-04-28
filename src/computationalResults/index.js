import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const computationalResults = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id) => makeRequest(config, `computational_results/${id}`),
    filter: (query = {}) => makeRequest(config, `computational_results/`, query)
  }
}

export default computationalResults
