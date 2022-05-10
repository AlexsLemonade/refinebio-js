import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const organisms = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'organisms')

  return {
    ...availableActions('organisms'),
    get,
    filter
  }
}

export default organisms
