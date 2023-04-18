import Refinebio from 'index'

const api = Refinebio({ verbose: true })
let createRequest

beforeAll(async () => {
  const data = { is_activated: true }
  createRequest = await api.token.create(data)
})

test('create a token', async () => {
  const UUID_REGEX =
    /^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/

  expect(createRequest.isOk).toBeTruthy()
  expect(createRequest.response.id).toMatch(UUID_REGEX)
})

test('get token details', async () => {
  const { id } = createRequest.response
  const getToken = await api.token.get(id)
  expect(getToken.isOk).toBeTruthy()
})

test('update a token', async () => {
  const { id } = createRequest.response
  const updateToken = await api.token.update({ id, is_activated: true })
  expect(updateToken.isOk).toBeTruthy()
})
