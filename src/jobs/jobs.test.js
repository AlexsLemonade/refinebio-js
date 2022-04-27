import Refinebio from 'index'

const api = Refinebio({ verbose: true })

describe('downloader job', () => {
  let createRequest

  beforeEach(async () => {
    createRequest = await api.jobs.get('downloader')
  })

  test('get the list of downloader jobs', async () => {
    expect(createRequest.isOk).toBeTruthy()
  })

  test('get a downloader job', async () => {
    const { id } = createRequest.response.results[0]
    const getDownloaderJob = await api.jobs.get('downloader', id)

    expect(getDownloaderJob.isOk).toBeTruthy()
  })
})

describe('processor job', () => {
  let createRequest

  beforeEach(async () => {
    createRequest = await api.jobs.get('processor')
  })

  test('get the list of processor jobs', async () => {
    expect(createRequest.isOk).toBeTruthy()
  })

  test('get a processor job', async () => {
    const { id } = createRequest.response.results[0]
    const getProcessorJob = await api.jobs.get('processor', id)

    expect(getProcessorJob.isOk).toBeTruthy()
  })
})

describe('suevey job', () => {
  let createRequest

  beforeEach(async () => {
    createRequest = await api.jobs.get('survey')
  })

  test('get the list of survey jobs', async () => {
    expect(createRequest.isOk).toBeTruthy()
  })

  test('get a survey job', async () => {
    const { id } = createRequest.response.results[0]
    const getSurveyJob = await api.jobs.get('survey', id)

    expect(getSurveyJob.isOk).toBeTruthy()
  })
})
