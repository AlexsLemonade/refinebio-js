import defaultConfig from 'config'
import { getActions } from 'utils/getActions'
import { availableActions } from 'utils/availableActions'

export const jobs = (config = defaultConfig) => {
  const downloaderGet = getActions(config, 'jobs/downloader').get
  const processorGet = getActions(config, 'jobs/processor').get
  const surveyGet = getActions(config, 'jobs/survey').get
  const downloaderFilter = getActions(config, 'jobs/downloader/').filter
  const processorFilter = getActions(config, 'jobs/processor/').filter
  const surveyFilter = getActions(config, 'jobs/survey/').filter

  return {
    ...availableActions,
    downloader: {
      get: downloaderGet,
      filter: downloaderFilter
    },
    processor: {
      get: processorGet,
      filter: processorFilter
    },
    survey: {
      get: surveyGet,
      filter: surveyFilter
    }
  }
}

export default jobs
