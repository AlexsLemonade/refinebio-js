import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const compendia = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id) => makeRequest(config, `compendia/${id}`),
    filter: (query = {}) => makeRequest(config, `compendia/`, query)
  }
}

export default compendia
