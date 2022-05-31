export const removeExperiment =
  (publicMethods, model, set) => (experimentAccession) => {
    if (!model[experimentAccession]) return publicMethods

    const newData = { ...model.data }
    delete newData[experimentAccession]

    return set('data', newData)
  }

export default removeExperiment
