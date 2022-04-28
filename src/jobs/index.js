import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const jobs = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (type, id) => makeRequest(config, `jobs/${type}/${id}`),
    filter: (type, query = {}) => makeRequest(config, `jobs/${type}`, query)
  }
}

export default jobs
