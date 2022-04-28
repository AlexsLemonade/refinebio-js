import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const statsAbout = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: () => makeRequest(config, `stats-about/`)
  }
}

export default statsAbout
