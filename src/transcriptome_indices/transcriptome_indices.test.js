import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.compendia.get()
})

test('get all transcriptome Indices', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get a S3 url associated with the transcriptome index', async () => {
  const { id } = createRequest.response.results[0]
  const getS3Url = await api.transcriptome_indices.get(id)

  expect(getS3Url.isOk).toBeTruthy()
})
