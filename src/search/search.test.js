import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('get search results for the experiments with advanced filtering', async () => {
  const getSearchResults = await api.search.filter()

  expect(getSearchResults.isOk).toBeTruthy()
})
