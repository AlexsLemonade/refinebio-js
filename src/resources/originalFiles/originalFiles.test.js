import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.originalFiles.filter()
})

test('get original files with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get an original file by ID', async () => {
  const { id } = filterRequest.response.results[0]
  const getOriginalFile = await api.originalFiles.get(id)

  expect(getOriginalFile.isOk).toBeTruthy()
})
