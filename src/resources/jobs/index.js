import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const jobs = (config = defaultConfig) => {
  const get = async (name, id = '') => {
    const { get: getJob } = getActions(config, `jobs/${name}`, id)

    return getJob(id)
  }

  return {
    ...availableActions('jobs'),
    get
  }
}

export default jobs
