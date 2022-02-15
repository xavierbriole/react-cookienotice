import { validateLabel, validateCookieExpiration, validateCookieName } from '.'

import { err } from '../helpers/debug'

jest.mock('../helpers/debug', () => ({
  err: jest.fn(),
}))

describe('validator', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('should validate label', () => {
    it('with string', () => {
      expect(validateLabel('label')).toBe('label')
    })

    it('with no parameter', () => {
      expect(validateLabel(undefined)).toBeUndefined()
    })
  })

  describe('should validate cookieExpiration', () => {
    describe('with number', () => {
      it('with valid number', () => {
        expect(validateCookieExpiration(1)).toBe(1)
      })

      it('with invalid number', () => {
        validateCookieExpiration(0)

        expect(err).toHaveBeenCalledWith(
          'cookieExpiration parameter should be more than 0 day',
        )
      })
    })

    it('with no parameter', () => {
      expect(validateCookieExpiration(undefined)).toBe(30)
    })
  })

  describe('should validate cookieName', () => {
    describe('with string', () => {
      it('with valid name', () => {
        expect(validateCookieName('name')).toBe('name')
      })

      describe('with invalid name', () => {
        it('with whitespace', () => {
          validateCookieName('name with whitespace')

          expect(err).toHaveBeenCalledWith(
            'cookieName parameter should not contain whitespace',
          )
        })

        it('with empty string', () => {
          validateCookieName('')

          expect(err).toHaveBeenCalledWith(
            'cookieName parameter should have at least one character',
          )
        })
      })
    })

    it('with no parameter', () => {
      expect(validateCookieName(undefined)).toBe('hide-notice')
    })
  })
})
