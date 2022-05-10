import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const samples = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'samples')

  return {
    ...availableActions,
    get,
    filter
  }
}

export default samples
