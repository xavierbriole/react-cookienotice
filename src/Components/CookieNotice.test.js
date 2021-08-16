// @flow

import * as React from 'react'
import { shallow, mount } from 'enzyme'
import CookieNotice from './CookieNotice'
import AcceptButton from './Buttons/AcceptButton'
import {
  validateCookieExpiration,
  validateCookieName,
  validateDarkTheme,
} from '../Validator/index'
import { setCookie } from '../Helpers/cookies'

jest.mock('../Validator/index', () => ({
  validateAcceptButtonLabel: jest.fn(),
  validateReadMoreButtonLabel: jest.fn(),
  validateReadMoreButtonLink: jest.fn(),
  validateReadMoreButtonOpenInNewTab: jest.fn(),
  validateCookieTextLabel: jest.fn(),
  validateReverseButtons: jest.fn(),
  validateBorderRadius: jest.fn(),
  validateJustifyContent: jest.fn(),
  validateMaxWidth: jest.fn(),
  validateCookieExpiration: jest.fn(),
  validateCookieName: jest.fn(),
  validateDarkTheme: jest.fn(),
  validateDisplayIcon: jest.fn(),
}))

jest.mock('../Helpers/cookies', () => ({
  getCookie: jest.fn(),
  setCookie: jest.fn(),
}))

const mock = (mockFn: any) => mockFn

describe('CookieNotice', () => {
  describe('without darkTheme', () => {
    describe('should render', () => {
      it('basically', () => {
        const wrapper = <CookieNotice />

        expect(wrapper).toMatchSnapshot()
      })

      it('fully', () => {
        const wrapper = (
          <CookieNotice
            acceptButtonLabel='acceptButtonLabel'
            readMoreButtonLabel='readMoreButtonLabel'
            readMoreButtonLink='readMoreButtonLink'
            openInNewTab={false}
            cookieTextLabel='cookieTextLabel'
            reverseButtons={false}
            borderRadius={32}
            justifyContent='space-between'
            maxWidth={1000}
            cookieExpiration={30}
            darkTheme={false}
          />
        )

        expect(wrapper).toMatchSnapshot()
      })
    })

    it('should have default class', () => {
      const wrapper = shallow(<CookieNotice />)
      expect(wrapper.find('.react-cookienotice-root')).toHaveLength(1)
    })

    it('wrapper should not have dark class', () => {
      mock(validateDarkTheme).mockImplementation(() => false)

      const wrapper = shallow(<CookieNotice />)

      expect(wrapper.find('.react-cookienotice-wrapper.dark')).toHaveLength(0)
    })

    it('should construct with state', () => {
      mock(validateDarkTheme).mockImplementation(() => false)

      const wrapper = shallow(<CookieNotice />)

      expect(wrapper.state('cookiesAllowed')).toBe(false)
      expect(wrapper.state('darkTheme')).toBe(false)
      expect(
        wrapper.find('.react-cookienotice-root.cookies-allowed')
      ).toHaveLength(0)
    })
  })

  describe('with darkTheme', () => {
    describe('should render', () => {
      it('basically', () => {
        const wrapper = <CookieNotice />

        expect(wrapper).toMatchSnapshot()
      })

      it('fully', () => {
        const wrapper = (
          <CookieNotice
            acceptButtonLabel='acceptButtonLabel'
            readMoreButtonLabel='readMoreButtonLabel'
            readMoreButtonLink='readMoreButtonLink'
            openInNewTab={false}
            cookieTextLabel='cookieTextLabel'
            reverseButtons={false}
            borderRadius={32}
            justifyContent='space-between'
            maxWidth={1000}
            cookieExpiration={30}
            darkTheme
          />
        )

        expect(wrapper).toMatchSnapshot()
      })
    })

    it('should have default class', () => {
      const wrapper = shallow(<CookieNotice />)
      expect(wrapper.find('.react-cookienotice-root')).toHaveLength(1)
    })

    it('wrapper should have dark class', () => {
      mock(validateDarkTheme).mockImplementation(() => true)

      const wrapper = shallow(<CookieNotice />)

      expect(wrapper.find('.react-cookienotice-wrapper.dark')).toHaveLength(1)
    })

    it('should construct with state', () => {
      mock(validateDarkTheme).mockImplementation(() => true)

      const wrapper = shallow(<CookieNotice />)

      expect(wrapper.state('cookiesAllowed')).toBe(false)
      expect(wrapper.state('darkTheme')).toBe(true)
      expect(
        wrapper.find('.react-cookienotice-root.cookies-allowed')
      ).toHaveLength(0)
    })
  })

  it('should set cookie', () => {
    mock(validateCookieName).mockImplementation(() => 'mockedCookieName')
    mock(validateCookieExpiration).mockImplementation(
      () => 'mockedCookieExpiration'
    )

    const wrapper = mount(<CookieNotice />)

    wrapper.find(AcceptButton).prop('onButtonClick')()

    expect(wrapper.state('cookiesAllowed')).toBe(true)
    expect(setCookie).toHaveBeenCalledWith(
      'mockedCookieName',
      'true',
      'mockedCookieExpiration'
    )

    wrapper.update()

    expect(
      wrapper.find('.react-cookienotice-root.cookies-allowed').at(0)
    ).toHaveLength(1)
  })
})
