import { formatMessage } from './format'

describe('formatMessage', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should return a formatted message', () => {
    const mockedConsoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    expect(formatMessage('message')).toBe('message')
    expect(mockedConsoleError).toHaveBeenCalledWith(
      '[intl] no message found for id "message"',
    )
  })

  it('should return overriden message', () => {
    const mockedConsoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    expect(formatMessage('message', 'override')).toBe('override')
    expect(mockedConsoleError).not.toHaveBeenCalled()
  })
})
