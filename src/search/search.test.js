import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('get search results for the experiments', async () => {
  const getSearchResults = await api.search.get()

  expect(getSearchResults.isOk).toBeTruthy()
})
