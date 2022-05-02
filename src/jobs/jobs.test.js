import Refinebio from 'index'

const api = Refinebio({ verbose: true })

describe('downloader job', () => {
  let filterRequest

  beforeEach(async () => {
    filterRequest = await api.jobs.filter.downloader({})
  })

  test('get a list of downloader jobs with filtering', async () => {
    expect(filterRequest.isOk).toBeTruthy()
  })

  test('get a downloader job', async () => {
    const { id } = filterRequest.response.results[0]
    const getDownloaderJob = await api.jobs.get.downloader(id)

    expect(getDownloaderJob.isOk).toBeTruthy()
  })
})

describe('processor job', () => {
  let filterRequest

  beforeEach(async () => {
    filterRequest = await api.jobs.filter.processor({})
  })

  test('get a list of processor jobs with filtering', async () => {
    expect(filterRequest.isOk).toBeTruthy()
  })

  test('get a processor job', async () => {
    const { id } = filterRequest.response.results[0]
    const getProcessorJob = await api.jobs.get.processor(id)

    expect(getProcessorJob.isOk).toBeTruthy()
  })
})

describe('suevey job', () => {
  let filterRequest

  beforeEach(async () => {
    filterRequest = await api.jobs.filter.survey({})
  })

  test('get a list of survey jobs with filtering', async () => {
    expect(filterRequest.isOk).toBeTruthy()
  })

  test('get a survey job', async () => {
    const { id } = filterRequest.response.results[0]
    const getSurveyJob = await api.jobs.get.survey(id)

    expect(getSurveyJob.isOk).toBeTruthy()
  })
})
