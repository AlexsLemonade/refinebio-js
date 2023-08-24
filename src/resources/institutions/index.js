import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const institutions = (config = defaultConfig) => {
  const { get } = getActions(config, 'institutions')

  return {
    ...availableActions('institutions'),
    get
  }
}

export default institutions
