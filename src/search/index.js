import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const search = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: () => makeRequest(config, `search/`)
  }
}

export default search
