import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

// eslint-disable-next-line camelcase
export const stats_about = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: () => makeRequest(config, `stats-about/`)
  }
}

// eslint-disable-next-line camelcase
export default stats_about
