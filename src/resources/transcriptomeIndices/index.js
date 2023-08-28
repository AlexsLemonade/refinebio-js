import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const transcriptomeIndices = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'transcriptome_indices')

  return {
    ...availableActions('transcriptome_indices'),
    get,
    filter
  }
}

export default transcriptomeIndices
