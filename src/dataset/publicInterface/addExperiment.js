import { deepCopy } from 'utils/deepCopy'

export const addExperiment =
  ({ model, set }) =>
  (experimentAccession) => {
    const newData = { ...deepCopy(model.data) }
    newData[experimentAccession] = ['ALL']

    return set('data', newData)
  }

export default addExperiment
