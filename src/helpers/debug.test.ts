import { vi } from 'vitest'

import { err } from './debug'

describe('debug', () => {
  const originalEnv = process.env
  let mockedConsoleError: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    vi.resetModules()
    mockedConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    process.env = originalEnv
    mockedConsoleError.mockRestore()
  })

  describe('in development', () => {
    beforeEach(() => {
      process.env = {
        ...originalEnv,
        NODE_ENV: 'development',
      }
    })

    it('should call console.error', () => {
      err('message')
      expect(mockedConsoleError).toHaveBeenCalledWith(
        '[react-cookienotice] message',
      )
    })
  })

  describe('in production', () => {
    beforeEach(() => {
      process.env = {
        ...originalEnv,
        NODE_ENV: 'production',
      }
    })

    it('should not call console.error', () => {
      err('message')
      expect(mockedConsoleError).not.toHaveBeenCalled()
    })
  })
})
