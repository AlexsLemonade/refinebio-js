import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let getRequest

beforeAll(async () => {
  getRequest = await api.transcriptomeIndices.get()
})

test('get all transcriptome Indices with filtering', async () => {
  expect(getRequest.isOk).toBeTruthy()
})

test('get a S3 url associated with the transcriptome index', async () => {
  const { id } = getRequest.response.results[0]
  const getS3Url = await api.transcriptomeIndices.get(id)

  expect(getS3Url.isOk).toBeTruthy()
})
