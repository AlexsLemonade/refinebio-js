import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.computedFiles.filter()
})

test('get computed files with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get a computed file by ID', async () => {
  const { id } = filterRequest.response.results[0]
  const getComputedFile = await api.computedFiles.get(id)

  expect(getComputedFile.isOk).toBeTruthy()
})
