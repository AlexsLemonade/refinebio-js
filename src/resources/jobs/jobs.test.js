import Refinebio from 'index'

const api = Refinebio({ verbose: true })

describe('downloader job', () => {
  let getRequest

  beforeEach(async () => {
    getRequest = await api.jobs.get('downloader')
  })

  test('get a list of downloader jobs', async () => {
    expect(getRequest.isOk).toBeTruthy()
  })

  test('get a downloader job', async () => {
    const { id } = getRequest.response.results[0]
    const getDownloaderJob = await api.jobs.get('downloader', id)

    expect(getDownloaderJob.isOk).toBeTruthy()
  })
})

describe('processor job', () => {
  let getRequest

  beforeEach(async () => {
    getRequest = await api.jobs.get('processor')
  })

  test('get a list of processor jobs', async () => {
    expect(getRequest.isOk).toBeTruthy()
  })

  test('get a processor job', async () => {
    const { id } = getRequest.response.results[0]
    const getProcessorJob = await api.jobs.get('processor', id)

    expect(getProcessorJob.isOk).toBeTruthy()
  })
})

describe('suevey job', () => {
  let getRequest

  beforeEach(async () => {
    getRequest = await api.jobs.get('survey')
  })

  test('get a list of survey jobs', async () => {
    expect(getRequest.isOk).toBeTruthy()
  })

  test('get a survey job', async () => {
    const { id } = getRequest.response.results[0]
    const getSurveyJob = await api.jobs.get('survey', id)

    expect(getSurveyJob.isOk).toBeTruthy()
  })
})
