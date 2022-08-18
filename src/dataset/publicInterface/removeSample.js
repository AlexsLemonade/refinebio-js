import { deepCopy } from 'utils/deepCopy'

export const removeSample =
  ({ model, set }) =>
  (experimentAccession, sampleAccession) => {
    const newData = { ...deepCopy(model.data) }
    const i = newData[experimentAccession].indexOf(sampleAccession)

    if (i > -1) {
      newData[experimentAccession].splice(i, 1)
    }

    return set('data', newData)
  }

export default removeSample
