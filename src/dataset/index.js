// TODO: create a separate folder for helpers as ./helpers and keep emus in ./utils
import { AGGREGATED_BY, SCALE_BY, SVD_ALGORITHM } from 'utils/enums'
import { makeDeepCopy } from 'utils/makeDeepCopy'

export const Dataset = (api) => {
  return (settings = {}) => {
    const configurable = {
      start: null,
      data: {}, // via helpers
      email: '', // via a helper
      // available options for setOption
      aggregate_by: AGGREGATED_BY.ALL,
      scale_by: SCALE_BY.NONE,
      quantile_normalize: true,
      quant_sf_only: false,
      svd_algorithm: SVD_ALGORITHM.NONE
    }

    const model = Object.seal(makeDeepCopy(configurable, settings))

    const isBoolean = (value) => typeof value === 'boolean'

    const isMatch = (enems, value) => Object.keys(enems).indexOf(value)

    const makeArrayOfValues = (obj) => Object.values(obj)

    const validateOption = (key, value) => {
      const error = []

      switch (key) {
        case 'aggregate_by':
          if (!isMatch(AGGREGATED_BY, value)) {
            error.push(
              `The value should one of the following: ${makeArrayOfValues(
                AGGREGATED_BY
              ).join(',')}`
            )
          }
          break
        case 'scale_by':
          if (!isMatch(SCALE_BY, value)) {
            error.push(
              `The value should one of the following: ${makeArrayOfValues(
                SCALE_BY
              ).join(',')}`
            )
          }
          break
        case 'quantile_normalize':
          if (!isBoolean(value)) {
            error.push('The value should be a boolean value')
          }
          break
        case 'quant_sf_only':
          if (!isBoolean(value)) {
            error.push('The value should be a boolean value')
          }
          break
        case 'svd_algorithm':
          if (!isMatch(SVD_ALGORITHM, value)) {
            error.push(
              `The value should one of the following: ${makeArrayOfValues(
                SVD_ALGORITHM
              ).join(',')}`
            )
          }
          break
        default:
          error.push('The option is not available')
          break
      }

      return error
    }

    const get = (key) => model[key]

    const set = (key, value) => {
      model[key] = value
    }

    const setAndGet = (key, value) => {
      set(key, value)
      get(key)
    }

    const getOption = (option) => get(option)

    const setOption = (option, value) => {
      const error = validateOption(option, value)[0]

      if (error) {
        console.error(error)
        return
      }

      setAndGet(option, value)
    }

    const setEmail = (email) => {
      const regex =
        /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/

      if (!regex.test(email)) {
        console.error('The value should be a valid email address format')
        return
      }

      setAndGet('email', email)
    }

    const addExperiment = (
      experimentAccession,
      aggregateBy = AGGREGATED_BY.ALL
    ) => {
      const newData = { ...model.data }
      newData.aggregate_by = aggregateBy // ? DISCUSS: how this property will be defined in new API
      newData[experimentAccession] = ['ALL']

      setAndGet('data', newData)
    }

    const removeExperiment = (experimentAccession) => {
      const newData = { ...model.data }
      newData.aggregate_by = null // ? DISCUSS: how this property will be defined in new API
      delete newData[experimentAccession]

      setAndGet('data', newData)
    }

    const addSample = (experimentAccession, sampleAccession) => {
      const newData = { ...model.data }
      // ? DISCUSS: how to populate a list of samples in a datatable(avrg 60k records per dataset) with new API structure
      // ? DISCUSS: how to persist records locally while a user performing actions such as add/remove/pagination/filters
      if (!newData[experimentAccession]) {
        newData[experimentAccession] = [sampleAccession]
      } else {
        newData[experimentAccession].push(sampleAccession)
      }

      setAndGet('data', newData)
    }

    const removeSample = (experimentAccession, sampleAccession) => {
      if (!model.data[experimentAccession]) return

      const newData = { ...model.data }
      const i = newData[experimentAccession].indexOf(sampleAccession)

      if (i > -1) {
        newData[experimentAccession].splice(i, 1)
      }

      setAndGet('data', newData)
    }

    // save or update the dataset to our server
    const save = async () => {
      set('start', true)
      const action = model.id ? 'update' : 'create'
      const request = await api[action](model)

      return request.isOK
        ? request.response
        : { isOk: request.isOk, status: request.status, error: request.error }
    }

    return {
      getOption,
      setOption,
      save,
      setEmail,
      addExperiment,
      removeExperiment,
      addSample,
      removeSample
    }
  }
}

export default Dataset
