import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

/* eslint-disable camelcase */
export const computed_files = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (id) => {
      if (!id) {
        return makeRequest(config, `computed_files/`)
      }
      return makeRequest(config, `computed_files/${id}`)
    }
  }
}

/* eslint-disable camelcase */
export default computed_files
