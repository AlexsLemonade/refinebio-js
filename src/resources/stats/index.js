import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const stats = (config = defaultConfig) => {
  const get = async (name) => {
    const { get: getJob } = getActions(
      config,
      `stats${name ? `/failures/${name}` : ''}`
    )

    return getJob()
  }

  return {
    ...availableActions('stats'),
    get
  }
}

export default stats
