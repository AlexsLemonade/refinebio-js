import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let getRequest

beforeAll(async () => {
  getRequest = await api.originalFiles.get()
})

test('get original files', async () => {
  expect(getRequest.isOk).toBeTruthy()
})

test('get an original file by ID', async () => {
  const { id } = getRequest.response.results[0]
  const getOriginalFile = await api.originalFiles.get(id)

  expect(getOriginalFile.isOk).toBeTruthy()
})
