import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.computationalResults.filter()
})

test('get all computational results with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get a computational result by ID', async () => {
  const { id } = filterRequest.response.results[0]
  const getComputationalResult = await api.computationalResults.get(id)

  expect(getComputationalResult.isOk).toBeTruthy()
})
