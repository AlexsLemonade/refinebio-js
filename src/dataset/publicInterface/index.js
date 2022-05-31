import { getOption } from 'dataset/publicInterface/getOption'
import { setOption } from 'dataset/publicInterface/setOption'
import { getData } from 'dataset/publicInterface/getData'
import { setEmail } from 'dataset/publicInterface/setEmail'
import { save } from 'dataset/publicInterface/save'
import { addExperiment } from 'dataset/publicInterface/addExperiment'
import { removeExperiment } from 'dataset/publicInterface/removeExperiment'
import { addSample } from 'dataset/publicInterface/addSample'
import { removeSample } from 'dataset/publicInterface/removeSample'

export const publicInterface = Object.freeze({
  getOption,
  setOption,
  getData,
  setEmail,
  save,
  addExperiment,
  removeExperiment,
  addSample,
  removeSample
})

export default publicInterface
