import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.processors.get()
})

test('get all available processors with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get a processor by its ID', async () => {
  const { id } = filterRequest.response.results[0]
  const getProcessor = await api.processors.get(id)

  expect(getProcessor.isOk).toBeTruthy()
})
