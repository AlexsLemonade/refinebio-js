import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

// eslint-disable-next-line camelcase
export const qn_targets = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (organismName = null) => {
      if (!organismName) {
        return makeRequest(config, `qn_targets/`)
      }
      return makeRequest(config, `qn_targets/${organismName}`)
    }
  }
}

// eslint-disable-next-line camelcase
export default qn_targets
