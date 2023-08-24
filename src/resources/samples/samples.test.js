import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let getRequest

beforeAll(async () => {
  getRequest = await api.samples.get()
})

test('get detailed information on samples', async () => {
  expect(getRequest.isOk).toBeTruthy()
})

test('get sample details by its accession code', async () => {
  const { accession_code: accessionCode } = getRequest.response.results[0]
  const getSample = await api.samples.get(accessionCode)

  expect(getSample.isOk).toBeTruthy()
})
