import { getData } from 'dataset/publicInterface/getData'
import { setEmail } from 'dataset/publicInterface/setEmail'
import { addExperiment } from 'dataset/publicInterface/addExperiment'
import { removeExperiment } from 'dataset/publicInterface/removeExperiment'
import { getOption } from 'dataset/publicInterface/getOption'
import { setOption } from 'dataset/publicInterface/setOption'
import { addSample } from 'dataset/publicInterface/addSample'
import { removeSample } from 'dataset/publicInterface/removeSample'
import { save } from 'dataset/publicInterface/save'

export const publicInterface = Object.freeze({
  getData,
  setEmail,
  addExperiment,
  removeExperiment,
  getOption,
  setOption,
  addSample,
  removeSample,
  save
})

export default publicInterface
