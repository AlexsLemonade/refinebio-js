import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const transcriptome_indices = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id = null) => {
      if (!id) {
        return makeRequest(config, `transcriptome_indices/`)
      }
      return makeRequest(config, `transcriptome_indices/${id}`)
    }
  }
}

export default transcriptome_indices
