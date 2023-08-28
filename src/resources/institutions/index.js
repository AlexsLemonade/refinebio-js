import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const institutions = (config = defaultConfig) => {
  const { filter } = getActions(config, 'institutions')

  return {
    ...availableActions('institutions'),
    filter
  }
}

export default institutions
