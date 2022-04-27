import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.computational_results.get()
})

test('get all computational results', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get a computational result by ID', async () => {
  const { id } = createRequest.response.results[0]
  const getComputationalResult = await api.computational_results.get(id)

  expect(getComputationalResult.isOk).toBeTruthy()
})
