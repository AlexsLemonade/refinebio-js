import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let getRequest

beforeAll(async () => {
  getRequest = await api.compendia.get()
})

test('get a compendium result by ID', async () => {
  const { id } = getRequest.response.results[0]
  const getCompendia = await api.compendia.get(id)

  expect(getCompendia.isOk).toBeTruthy()
})
