import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const experiments = (config = defaultConfig) => {
  const { get } = getActions(config, 'experiments', 'accession_code')

  return {
    ...availableActions('experiments'),
    get
  }
}

export default experiments
