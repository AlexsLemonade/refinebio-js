import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const token = (config = defaultConfig) => {
  const { create, get, update } = getActions(config, 'token')

  return {
    ...availableActions,
    create,
    get,
    update
  }
}

export default token
