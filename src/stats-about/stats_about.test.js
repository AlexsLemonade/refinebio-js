import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('get stats for the about page', async () => {
  const getStatsAbout = await api.stats_about.get()

  expect(getStatsAbout.isOk).toBeTruthy()
})
