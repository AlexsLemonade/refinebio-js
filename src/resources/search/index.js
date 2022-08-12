import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const search = (config = defaultConfig) => {
  const { filter } = getActions(config, 'search')

  return {
    ...availableActions('search'),
    filter
  }
}

export default search
