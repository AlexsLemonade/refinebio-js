import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.samples.filter()
})

test('get detailed information on samples with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get sample details by its accession code', async () => {
  const { accession_code: accessionCode } = filterRequest.response.results[0]
  const getSample = await api.samples.get(accessionCode)

  expect(getSample.isOk).toBeTruthy()
})
