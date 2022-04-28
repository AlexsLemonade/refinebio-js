import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const qnTargets = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (organismName) => makeRequest(config, `qn_targets/${organismName}`),
    filter: (query = {}) => makeRequest(config, `qn_targets/`, query)
  }
}

export default qnTargets
