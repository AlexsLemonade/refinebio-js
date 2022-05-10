import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.transcriptomeIndices.filter()
})

test('get all transcriptome Indices with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get a S3 url associated with the transcriptome index', async () => {
  const { id } = filterRequest.response.results[0]
  const getS3Url = await api.transcriptomeIndices.get(id)

  expect(getS3Url.isOk).toBeTruthy()
})
