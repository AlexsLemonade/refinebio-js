import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const samples = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (accessionCode = null) => {
      if (!accessionCode) {
        return makeRequest(config, `samples/`)
      }
      return makeRequest(config, `samples/${accessionCode}`)
    }
  }
}

export default samples
