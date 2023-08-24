import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const originalFiles = (config = defaultConfig) => {
  const { get } = getActions(config, 'original_files')

  return {
    ...availableActions('original_files'),
    get
  }
}

export default originalFiles
