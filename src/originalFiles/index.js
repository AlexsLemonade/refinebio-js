import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const originalFiles = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id = null) => makeRequest(config, `original_files/${id}`),
    filter: (query = {}) => makeRequest(config, `original_files/`, query)
  }
}

export default originalFiles
