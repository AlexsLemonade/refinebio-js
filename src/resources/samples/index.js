import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const samples = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'samples', 'accession_code')

  return {
    ...availableActions('samples'),
    get,
    filter
  }
}

export default samples
