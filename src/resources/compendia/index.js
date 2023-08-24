import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const compendia = (config = defaultConfig) => {
  const { get } = getActions(config, 'compendia')

  return {
    ...availableActions('compendia'),
    get
  }
}

export default compendia
