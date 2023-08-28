import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const computationalResults = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'computational_results')

  return {
    ...availableActions('computational_results'),
    get,
    filter
  }
}

export default computationalResults
