export const addExperiment =
  (publicMethods, model, set) => (experimentAccession) => {
    const newData = { ...model.data }
    newData[experimentAccession] = ['ALL']

    return set('data', newData)
  }

export default addExperiment
