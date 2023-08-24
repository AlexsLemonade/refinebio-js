import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const computationalResults = (config = defaultConfig) => {
  const { get } = getActions(config, 'computational_results')

  return {
    ...availableActions('computational_results'),
    get
  }
}

export default computationalResults
