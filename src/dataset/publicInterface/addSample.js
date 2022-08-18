export const addSample =
  ({ model, set }) =>
  (experimentAccession, sampleAccession) => {
    const newData = { ...model.data }
    // ? DISCUSS: how to populate a list of samples in a datatable(avrg 60k records per dataset) with new API structure
    // ? DISCUSS: how to persist records in a datatable locally while a user performing actions such as add/remove/pagination/filters
    if (!newData[experimentAccession]) {
      newData[experimentAccession] = [sampleAccession]
    } else {
      newData[experimentAccession].push(sampleAccession)
    }

    return set('data', newData)
  }

export default addSample
