import { availableActions } from 'utils/availableActions'

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args) => args)
})

afterEach(() => console.error.mockClear())
afterAll(() => console.error.mockRestore())

test('available action default output', () => {
  const actions = availableActions('exampleResource')
  Object.keys(actions).forEach((action) => {
    expect(actions[action]()[0]).toBe(
      `exampleResource does not support ${action.toUpperCase()}`
    )
  })
})
