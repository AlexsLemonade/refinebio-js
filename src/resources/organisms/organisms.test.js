import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.organisms.filter()
})

test('get an organism by its name', async () => {
  const { name } = filterRequest.response.results[0]
  const getOrganism = await api.organisms.get(name)

  expect(getOrganism.isOk).toBeTruthy()
})
