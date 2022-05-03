import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const stats = (config = defaultConfig) => {
  const { get } = getActions(config, 'stats')

  return {
    ...availableActions,
    get
  }
}

export default stats
