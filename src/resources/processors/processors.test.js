import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let getRequest

beforeAll(async () => {
  getRequest = await api.processors.get()
})

test('get all available processors', async () => {
  expect(getRequest.isOk).toBeTruthy()
})

test('get a processor by its ID', async () => {
  const { id } = getRequest.response.results[0]
  const getProcessor = await api.processors.get(id)

  expect(getProcessor.isOk).toBeTruthy()
})
