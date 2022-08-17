import { mergeDatasets } from 'utils/mergeDatasets'
import { publicInterface } from 'dataset/publicInterface'

export const Dataset = (api) => {
  return (override = {}) => {
    const defaults = {
      start: false,
      data: {}, // via helpers
      email: '', // setEmail
      // available options for setOption
      aggregate_by: 'ALL',
      scale_by: 'NONE',
      quantile_normalize: true,
      quant_sf_only: false,
      svd_algorithm: 'NONE'
    }

    const model = Object.seal(mergeDatasets(defaults, override))

    const get = (key) => model[key]

    const set = (key, value) => {
      model[key] = value
      return publicInterface
    }

    Object.entries(publicInterface).forEach(([k, v]) => {
      switch (k) {
        case 'save':
          publicInterface[k] = v(publicInterface, model, api)
          break
        case 'getOption' || 'getData':
          publicInterface[k] = v(get)
          break
        case 'setOption' || 'setEmail':
          v(set)
          break
        default:
          publicInterface[k] = v(publicInterface, model, set)
      }
    })

    return publicInterface
  }
}

export default Dataset
