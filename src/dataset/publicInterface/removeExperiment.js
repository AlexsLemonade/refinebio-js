export const removeExperiment =
  (publicMethods, model, set) => (experimentAccession) => {
    const newData = { ...model.data }
    delete newData[experimentAccession]

    return set('data', newData)
  }

export default removeExperiment
