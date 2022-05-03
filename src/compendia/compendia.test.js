import Refinebio from 'index'

const mockFetch = async (APIUrl, xhrConfig) => {
  return {
    ok: true,
    status: 200,
    response: {
      json: async () => ({})
    },
    APIUrl,
    xhrConfig
  }
}
const api = Refinebio({ verbose: true, fetch: mockFetch })
test('get all compendia results with filtering', async () => {
  const filterRequest = await api.compendia.filter()
  console.log(filterRequest)
})

// test('get a compendium result by ID', async () => {
//   const { id } = filterRequest.response.results[0]
//   const getCompendia = await api.compendia.get(id)

//   expect(getCompendia.isOk).toBeTruthy()
// })
