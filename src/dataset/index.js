import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const dataset = (config = defaultConfig) => {
  const { create, get, update } = getActions(config, 'dataset')

  return {
    ...availableActions,
    create,
    get,
    update
  }
}

export default dataset
