import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const computedFiles = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'computed_files')

  return {
    ...availableActions('computed_files'),
    get,
    filter
  }
}

export default computedFiles
