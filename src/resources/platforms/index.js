import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const platforms = (config = defaultConfig) => {
  const { filter } = getActions(config, 'platforms')

  return {
    ...availableActions('platforms'),
    filter
  }
}

export default platforms
