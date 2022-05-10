import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const stats = (config = defaultConfig) => {
  const { get } = getActions(config, 'stats')
  const downloader = getActions(config, 'stats/failures/downloader').filter
  const processor = getActions(config, 'stats/failures/processor').filter

  return {
    ...availableActions,
    get,
    failures: {
      downloader: {
        filter: downloader
      },
      processor: {
        filter: processor
      }
    }
  }
}

export default stats
