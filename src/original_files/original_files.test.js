import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.compendia.get()
})

test('get original files', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get an original file by ID', async () => {
  const { id } = createRequest.response.results[0]
  const getOriginalFile = await api.original_files.get(id)

  expect(getOriginalFile.isOk).toBeTruthy()
})
