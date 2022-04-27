import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const institutions = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: () => makeRequest(config, `institutions/`)
  }
}

export default institutions
