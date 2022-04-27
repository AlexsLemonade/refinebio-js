import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const experiments = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (accessionCode) => {
      if (!accessionCode) {
        return makeRequest(config, `experiments/`)
      }
      return makeRequest(config, `experiments/${accessionCode}`)
    }
  }
}

export default experiments
