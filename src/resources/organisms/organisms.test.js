import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let getRequest

beforeAll(async () => {
  getRequest = await api.organisms.get()
})

test('get an organism by its name', async () => {
  const { name } = getRequest.response.results[0]
  const getOrganism = await api.organisms.get(name)

  expect(getOrganism.isOk).toBeTruthy()
})
