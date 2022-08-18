import { deepCopy } from 'utils/deepCopy'

export const removeExperiment =
  ({ model, set }) =>
  (experimentAccession) => {
    const newData = { ...deepCopy(model.data) }
    delete newData[experimentAccession]

    return set('data', newData)
  }

export default removeExperiment
