import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

/* eslint-disable camelcase */
export const original_files = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id = null) => {
      if (!id) {
        return makeRequest(config, `original_files/`)
      }
      return makeRequest(config, `original_files/${id}`)
    }
  }
}

/* eslint-disable camelcase */
export default original_files
