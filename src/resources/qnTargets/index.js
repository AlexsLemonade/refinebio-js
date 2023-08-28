import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const qnTargets = (config = defaultConfig) => {
  const { get, filter } = getActions(config, 'qn_targets', 'organism_name')

  return {
    ...availableActions('qn_targets'),
    get,
    filter
  }
}

export default qnTargets
