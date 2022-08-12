import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const processors = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'processors')

  return {
    ...availableActions('processors'),
    get,
    filter
  }
}

export default processors
