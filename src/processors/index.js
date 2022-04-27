import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const processors = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id) => {
      if (!id) {
        return makeRequest(config, `processors/`)
      }
      return makeRequest(config, `processors/${id}`)
    }
  }
}

export default processors
