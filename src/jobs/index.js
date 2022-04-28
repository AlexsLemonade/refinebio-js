import defaultConfig from 'config'
import { makeRequest } from 'utils/makeRequest'
import { availableActions } from 'utils/availableActions'

export const jobs = (config = defaultConfig) => {
  return {
    ...availableActions,
    get: (type, id = null) => {
      if (type === 'downloader') {
        if (!id) {
          return makeRequest(config, `jobs/downloader`)
        }
        return makeRequest(config, `jobs/downloader/${id}`)
      }
      if (type === 'processor') {
        if (!id) {
          return makeRequest(config, `jobs/processor`)
        }
        return makeRequest(config, `jobs/processor/${id}`)
      }
      if (type === 'survey') {
        if (!id) {
          return makeRequest(config, `jobs/survey`)
        }
        return makeRequest(config, `jobs/survey/${id}`)
      }
      throw new Error('Missing an argument for a job type')
    }
  }
}

export default jobs
