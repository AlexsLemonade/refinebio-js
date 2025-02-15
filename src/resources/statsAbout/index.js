import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const statsAbout = (config = defaultConfig) => {
  const { get } = getActions(config, 'stats-about')
  return {
    ...availableActions('stats-about'),
    get
  }
}

export default statsAbout
