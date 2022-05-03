import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const platforms = (config = defaultConfig) => {
  const { get } = getActions(config, 'platforms')

  return {
    ...availableActions,
    get
  }
}

export default platforms
