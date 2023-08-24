import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const organisms = (config = defaultConfig) => {
  const { get } = getActions(config, 'organisms', 'name')

  return {
    ...availableActions('organisms'),
    get
  }
}

export default organisms
