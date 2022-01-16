import MockDate from 'mockdate'

import { setCookie, getCookie } from './cookies'

describe('cookies', () => {
  it('should set cookie', () => {
    MockDate.set(new Date('2020-06-25T05:54:01'))

    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: '',
    })

    setCookie('name', 'value', 7)

    expect(window.document.cookie).toEqual(
      'name=value;expires=Thu, 02 Jul 2020 09:54:01 GMT',
    )
  })

  describe('should get cookie', () => {
    it('should return null if the cookie does not exist', () => {
      expect(getCookie('key')).toEqual(null)
    })

    it('should return cookie value', () => {
      window.document.cookie =
        'name=value;expires=Thu, 02 Jul 2020 09:54:01 GMT'

      expect(getCookie('name')).toEqual('value')
    })
  })
})
