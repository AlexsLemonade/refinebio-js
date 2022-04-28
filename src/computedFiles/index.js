import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const computedFiles = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id) => makeRequest(config, `computed_files/${id}`),
    filter: (query) => makeRequest(config, `computed_files/`, query)
  }
}

export default computedFiles
