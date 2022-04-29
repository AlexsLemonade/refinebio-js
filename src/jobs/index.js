import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const jobs = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'jobs')

  return {
    ...availableActions,
    get,
    filter
  }
}

export default jobs
