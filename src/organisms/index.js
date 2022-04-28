import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const organisms = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (name) => makeRequest(config, `organisms/${name}`),
    filter: (query = {}) => makeRequest(config, `organisms/`, query)
  }
}

export default organisms
