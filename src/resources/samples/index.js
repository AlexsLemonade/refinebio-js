import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const samples = (config = defaultConfig) => {
  const { get } = getActions(config, 'samples', 'accession_code')

  return {
    ...availableActions('samples'),
    get
  }
}

export default samples
