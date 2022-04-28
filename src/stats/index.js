import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const stats = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (type = null) => {
      if (!type) {
        return makeRequest(config, `stats/`)
      }
      return type === 'downloader'
        ? makeRequest(config, `stats/failures/downloader`)
        : makeRequest(config, `stats/failures/processor`)
    }
  }
}

export default stats
