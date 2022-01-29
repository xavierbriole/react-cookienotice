import {
  validateAcceptButtonLabel,
  validateReadMoreButtonLabel,
  validateReadMoreButtonLink,
  validateReadMoreButtonOpenInNewTab,
  validateCookieTextLabel,
  validateCookieExpiration,
  validateCookieName,
} from '.'

import { err } from '../helpers/debug'

jest.mock('../helpers/debug', () => ({
  err: jest.fn(),
}))

describe('validator', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('should validate acceptButtonLabel', () => {
    it('with string', () => {
      expect(validateAcceptButtonLabel('label')).toBe('label')
    })

    it('with no parameter', () => {
      expect(validateAcceptButtonLabel(undefined)).toBeUndefined()
    })
  })

  describe('should validate readMoreButtonLabel', () => {
    it('with string', () => {
      expect(validateReadMoreButtonLabel('label')).toBe('label')
    })

    it('with no parameter', () => {
      expect(validateReadMoreButtonLabel(undefined)).toBeUndefined()
    })
  })

  describe('should validate readMoreButtonLink', () => {
    describe('with string', () => {
      it('with http://', () => {
        expect(validateReadMoreButtonLink('http://')).toBe('http://')
      })

      it('with https://', () => {
        expect(validateReadMoreButtonLink('https://')).toBe('https://')
      })

      it('with invalid url', () => {
        validateReadMoreButtonLink('invalid')

        expect(err).toHaveBeenCalledWith(
          'readMoreButtonLink parameter should starts with "http://" or "https://"',
        )
      })
    })

    it('with no parameter', () => {
      expect(validateReadMoreButtonLink(undefined)).toBe(
        'http://aboutcookies.org/',
      )
    })
  })

  describe('should validate readMoreButtonOpenInNewTab', () => {
    it('with boolean', () => {
      expect(validateReadMoreButtonOpenInNewTab(true)).toBe(true)
    })

    it('with no parameter', () => {
      expect(validateReadMoreButtonOpenInNewTab(undefined)).toBe(true)
    })
  })

  describe('should validate cookieTextLabel', () => {
    it('with string', () => {
      expect(validateCookieTextLabel('label')).toBe('label')
    })

    it('with no parameter', () => {
      expect(validateCookieTextLabel(undefined)).toBeUndefined()
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
      expect(validateCookieName(undefined)).toBe('allow-cookies')
    })
  })
})
