import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const compendia = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id) => {
      if (!id) {
        return makeRequest(config, `compendia/`)
      }
      return makeRequest(config, `compendia/${id}`)
    }
  }
}

export default compendia
