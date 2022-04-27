import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'
/* eslint-disable camelcase */
export const computational_results = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id) => {
      if (!id) {
        return makeRequest(config, `computational_results/`)
      }
      return makeRequest(config, `computational_results/${id}`)
    }
  }
}

/* eslint-disable camelcase */
export default computational_results
