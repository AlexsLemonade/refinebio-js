import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.processors.get()
})

test('get all available processors', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get a processor by its ID', async () => {
  const { id } = createRequest.response.results[0]
  const getProcessor = await api.processors.get(id)

  expect(getProcessor.isOk).toBeTruthy()
})
