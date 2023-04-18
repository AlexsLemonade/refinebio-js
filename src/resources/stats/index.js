import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const stats = (config = defaultConfig) => {
  const path = 'stats'
  const specificPath = `${path}/failures/`
  const { get } = getActions(config, path)
  const downloader = getActions(config, `${specificPath}downloader`).filter
  const processor = getActions(config, `${specificPath}processor`).filter

  return {
    ...availableActions(path),
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
