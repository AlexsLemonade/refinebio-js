import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('get all the available "platforms" information with filtering', async () => {
  const getPlatforms = await api.platforms.filter()

  expect(getPlatforms.isOk).toBeTruthy()
})
