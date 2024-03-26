import { vi } from 'vitest'

import { getCookieValue, setCookie } from './cookies'

describe('cookies', () => {
  beforeEach(() => {
    vi.useFakeTimers().setSystemTime(new Date('2020-06-25T05:54:01'))

    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: '',
    })
  })

  describe('should set cookie', () => {
    it('with secure true', () => {
      setCookie({
        name: 'name',
        value: 'value',
        expires: 30,
        secure: true,
        httpOnly: false,
        sameSite: 'lax',
      })

      expect(window.document.cookie).toEqual(
        'name=value;expires=Sat, 25 Jul 2020 09:54:01 GMT;path=/;Secure;SameSite=lax;',
      )
    })

    it('with httpOnly true', () => {
      setCookie({
        name: 'name',
        value: 'value',
        expires: 30,
        secure: false,
        httpOnly: true,
        sameSite: 'lax',
      })

      expect(window.document.cookie).toEqual(
        'name=value;expires=Sat, 25 Jul 2020 09:54:01 GMT;path=/;HttpOnly;SameSite=lax;',
      )
    })
  })

  describe('should get cookie value', () => {
    it('should return null if the cookie does not exist', () => {
      expect(getCookieValue('key')).toEqual(null)
    })

    it('should return cookie value', () => {
      window.document.cookie =
        'name=value;expires=Thu, 02 Jul 2020 09:54:01 GMT'

      expect(getCookieValue('name')).toEqual('value')
    })
  })
})
