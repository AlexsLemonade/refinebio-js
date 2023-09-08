import Refinebio from 'index'

const api = Refinebio({ verbose: true })

describe('downloader job', () => {
  let filterRequest

  beforeEach(async () => {
    filterRequest = await api.jobs.downloader.filter({})
  })

  test('get a list of downloader jobs with filtering', async () => {
    expect(filterRequest.isOk).toBeTruthy()
  })

  test('get a downloader job', async () => {
    const { id } = filterRequest.response.results[0]
    const getDownloaderJob = await api.jobs.downloader.get(id)

    expect(getDownloaderJob.isOk).toBeTruthy()
  })
})

describe('processor job', () => {
  let filterRequest

  beforeEach(async () => {
    filterRequest = await api.jobs.processor.filter({})
  })

  test('get a list of processor jobs with filtering', async () => {
    expect(filterRequest.isOk).toBeTruthy()
  })

  test('get a processor job', async () => {
    const { id } = filterRequest.response.results[0]
    const getProcessorJob = await api.jobs.processor.get(id)

    expect(getProcessorJob.isOk).toBeTruthy()
  })
})

describe('suevey job', () => {
  let filterRequest

  beforeEach(async () => {
    filterRequest = await api.jobs.survey.filter({})
  })

  test('get a list of survey jobs with filtering', async () => {
    expect(filterRequest.isOk).toBeTruthy()
  })

  test('get a survey job', async () => {
    const { id } = filterRequest.response.results[0]
    const getSurveyJob = await api.jobs.survey.get(id)

    expect(getSurveyJob.isOk).toBeTruthy()
  })
})
