import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const organisms = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (name) => {
      if (!name) {
        return makeRequest(config, `organisms/`)
      }
      return makeRequest(config, `organisms/${name}`)
    }
  }
}

export default organisms
