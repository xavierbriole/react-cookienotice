import { warn, err } from './debug'

describe('debug', () => {
  describe('in development', () => {
    const originalEnv = process.env

    beforeEach(() => {
      jest.resetModules()

      process.env = {
        ...originalEnv,
        NODE_ENV: 'development',
      }
    })

    afterEach(() => {
      process.env = originalEnv
    })

    it('should call console.warn', () => {
      const mockedConsoleWarn = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {})

      warn('message')

      expect(mockedConsoleWarn).toHaveBeenCalledWith(
        '[react-cookienotice] message',
      )
    })

    it('should call console.error', () => {
      const mockedConsoleError = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {})

      err('message')

      expect(mockedConsoleError).toHaveBeenCalledWith(
        '[react-cookienotice] message',
      )
    })
  })

  describe('in production', () => {
    const originalEnv = process.env

    beforeEach(() => {
      jest.resetModules()

      process.env = {
        ...originalEnv,
        NODE_ENV: 'production',
      }
    })

    afterEach(() => {
      process.env = originalEnv
    })

    it('should not call console.warn', () => {
      const mockedConsoleWarn = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {})

      warn('message')

      expect(mockedConsoleWarn).not.toHaveBeenCalled()
    })

    it('should not call console.error', () => {
      const mockedConsoleError = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {})

      err('message')

      expect(mockedConsoleError).not.toHaveBeenCalled()
    })
  })
})
