import Refinebio from 'index'

const mockData = {
  test: 'test'
}

const mockFetch = jest.fn(async (APIUrl, xhrConfig) => {
  return {
    status: 200,
    response: Promise.resolve(mockData),
    APIUrl,
    xhrConfig
  }
})

const api = Refinebio({ verbose: true, fetch: mockFetch, test: true })
test('get all compendia results with filtering', async () => {
  const filterRequest = await api.compendia.filter()
  console.log(filterRequest)
})

// test('get a compendium result by ID', async () => {
//   const { id } = filterRequest.response.results[0]
//   const getCompendia = await api.compendia.get(id)

//   expect(getCompendia.isOk).toBeTruthy()
// })
