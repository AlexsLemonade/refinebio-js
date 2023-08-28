import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const compendia = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'compendia')

  return {
    ...availableActions('compendia'),
    get,
    filter
  }
}

export default compendia
