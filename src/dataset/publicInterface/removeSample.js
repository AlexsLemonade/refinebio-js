export const removeSample =
  (publicMethods, model, set) => (experimentAccession, sampleAccession) => {
    const newData = { ...model.data }
    const i = newData[experimentAccession].indexOf(sampleAccession)

    if (i > -1) {
      newData[experimentAccession].splice(i, 1)
    }

    return set('data', newData)
  }

export default removeSample
