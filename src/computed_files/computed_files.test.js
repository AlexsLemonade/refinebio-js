import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.computed_files.get()
})

test('get computed files', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get a computed file by ID', async () => {
  const { id } = createRequest.response.results[0]
  const getComputedFile = await api.computed_files.get(id)

  expect(getComputedFile.isOk).toBeTruthy()
})
