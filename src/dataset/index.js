import { mapObject } from 'utils/mapObject'
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
    }
    // eslint-disable-next-line no-unused-vars
    const instancePublicInterface = mapObject(publicInterface, ([_, v]) =>
      v({
        api,
        model,
        publicInterface,
        get,
        set
      })
    )

    return instancePublicInterface
  }
}

export default Dataset
