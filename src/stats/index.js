import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const stats = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (type = null) => {
      return !type
        ? makeRequest(config, `stats/`)
        : makeRequest(config, `stats/failures/${type}`)
    }
  }
}

export default stats
