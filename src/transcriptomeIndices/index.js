import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const transcriptomeIndices = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id = null) => makeRequest(config, `transcriptome_indices/${id}`),
    filter: (query) => makeRequest(config, `transcriptome_indices/`, query)
  }
}

export default transcriptomeIndices
