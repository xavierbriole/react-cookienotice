import { vi } from 'vitest'

import { err } from '../helpers/debug'
import {
  validateBoolean,
  validateCookieExpiration,
  validateCookieName,
  validateLabel,
  validateLink,
} from '.'

vi.mock('../helpers/debug', () => ({
  err: vi.fn(),
}))

describe('validator', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe('should validate label', () => {
    it('with string', () => {
      expect(validateLabel('label')).toBe('label')
    })

    it('with no parameter', () => {
      expect(validateLabel(undefined)).toBeUndefined()
    })
  })

  describe('should validate link', () => {
    describe('with string', () => {
      it('with http://', () => {
        expect(validateLink('http://')).toBe('http://')
      })

      it('with https://', () => {
        expect(validateLink('https://')).toBe('https://')
      })

      it('with invalid url', () => {
        validateLink('invalid')

        expect(err).toHaveBeenCalledWith(
          'a link should start with "http://" or "https://"',
        )
      })
    })
  })

  describe('should validate boolean', () => {
    it('with boolean', () => {
      expect(validateBoolean(true)).toBe(true)
    })

    it('with no parameter', () => {
      expect(validateBoolean(undefined)).toBeUndefined()
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
