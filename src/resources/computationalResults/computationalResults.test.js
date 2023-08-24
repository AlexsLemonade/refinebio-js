import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let getRequest

beforeAll(async () => {
  getRequest = await api.computationalResults.get()
})

test('get all computational results', async () => {
  expect(getRequest.isOk).toBeTruthy()
})

test('get a computational result by ID', async () => {
  const { id } = getRequest.response.results[0]
  const getComputationalResult = await api.computationalResults.get(id)

  expect(getComputationalResult.isOk).toBeTruthy()
})
