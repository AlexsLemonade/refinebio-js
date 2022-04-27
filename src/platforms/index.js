import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const platforms = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: () => makeRequest(config, `platforms/`)
  }
}

export default platforms
