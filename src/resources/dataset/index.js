import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const dataset = (config = defaultConfig) => {
  const path = 'dataset'
  const { create } = getActions(config, `${path}/`)
  const { get, update } = getActions(config, path)

  return {
    ...availableActions(path),
    create,
    get,
    update
  }
}

export default dataset
