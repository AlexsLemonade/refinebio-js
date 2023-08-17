import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const token = (config = defaultConfig) => {
  const path = 'token'
  const { create } = getActions(config, `${path}/`)
  const { get, update } = getActions(config, path)

  return {
    ...availableActions(path),
    create,
    get,
    update
  }
}

export default token
