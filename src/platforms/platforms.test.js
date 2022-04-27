import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('get all the available "platforms" information', async () => {
  const getPlatforms = await api.platforms.get()

  expect(getPlatforms.isOk).toBeTruthy()
})
