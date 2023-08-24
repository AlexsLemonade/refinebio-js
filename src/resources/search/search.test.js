import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('get search results for the experiments with advanced filtering', async () => {
  const searchQuery = {
    downloadable_organism: ['MUS_MUSCULUS', 'HOMO_SAPIENS']
  }
  const getSearchResults = await api.search.filter(searchQuery)

  expect(getSearchResults.isOk).toBeTruthy()
})
