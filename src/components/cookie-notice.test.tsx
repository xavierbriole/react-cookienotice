import { act, render } from '@testing-library/react'
import { vi } from 'vitest'

import { getCookieValue, setCookie } from '../helpers/cookies'
import CookieNotice from './cookie-notice'

vi.mock('../helpers/cookies', () => ({
  setCookie: vi.fn(),
  getCookieValue: vi.fn(),
}))

describe('CookieNotice', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('should render', () => {
    it('with default props', () => {
      const { asFragment } = render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://www.example.com'
          readMoreInNewTab={true}
          placement={{ vertical: 'bottom', horizontal: 'left' }}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('with no read more link', () => {
      const { asFragment } = render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel={undefined}
          readMoreLink={undefined}
          readMoreInNewTab={undefined}
          placement={{ vertical: 'bottom', horizontal: 'left' }}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it.each([
      [{ vertical: 'top', horizontal: 'left' }],
      [{ vertical: 'top', horizontal: 'right' }],
      [{ vertical: 'bottom', horizontal: 'left' }],
      [{ vertical: 'bottom', horizontal: 'right' }],
    ])('with placement %s', (placement) => {
      const { asFragment } = render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://www.example.com'
          readMoreInNewTab={true}
          // @ts-ignore
          placement={placement}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('in default view', () => {
    it('should handle accept all button click', () => {
      const onAcceptAllButtonClick = vi.fn()

      const { getByText } = render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={onAcceptAllButtonClick}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://www.example.com'
          readMoreInNewTab={true}
          placement={{ vertical: 'bottom', horizontal: 'left' }}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      act(() => {
        getByText('acceptAllButtonLabel').click()
      })

      expect(setCookie).toHaveBeenCalledTimes(1)
      expect(setCookie).toHaveBeenCalledWith({
        name: 'hide-notice',
        value: 'true',
        expires: 30,
        secure: false,
        httpOnly: false,
        sameSite: 'lax',
      })
      expect(onAcceptAllButtonClick).toHaveBeenCalledTimes(1)
    })

    it('should handle decline all button click', () => {
      const onDeclineAllButtonClick = vi.fn()

      const { getByText } = render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={onDeclineAllButtonClick}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://www.example.com'
          readMoreInNewTab={true}
          placement={{ vertical: 'bottom', horizontal: 'left' }}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      act(() => {
        getByText('declineAllButtonLabel').click()
      })

      expect(setCookie).toHaveBeenCalledTimes(1)
      expect(setCookie).toHaveBeenCalledWith({
        name: 'hide-notice',
        value: 'true',
        expires: 30,
        secure: false,
        httpOnly: false,
        sameSite: 'lax',
      })
      expect(onDeclineAllButtonClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('in customize view', () => {
    it('should handle accept button click', () => {
      const onAcceptButtonClick = vi.fn()

      const { getByText, getByLabelText } = render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
            {
              name: 'service3Name',
              description: 'service3Description',
              code: 'service3Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={onAcceptButtonClick}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://www.example.com'
          readMoreInNewTab={true}
          placement={{ vertical: 'bottom', horizontal: 'left' }}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      act(() => {
        getByText('customizeButtonLabel').click()
      })

      act(() => {
        getByLabelText('service2Code').click()
        getByLabelText('service3Code').click()
      })

      act(() => {
        getByText('acceptButtonLabel').click()
      })

      expect(setCookie).toHaveBeenCalledTimes(1)
      expect(setCookie).toHaveBeenCalledWith({
        name: 'hide-notice',
        value: 'true',
        expires: 30,
        secure: false,
        httpOnly: false,
        sameSite: 'lax',
      })
      expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptButtonClick).toHaveBeenCalledWith([
        'service2Code',
        'service3Code',
        'service1Code',
      ])
    })

    it('should handle accept all button click', () => {
      vi.useFakeTimers()

      const onAcceptAllButtonClick = vi.fn()

      const { getByText } = render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={onAcceptAllButtonClick}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
            {
              name: 'service3Name',
              description: 'service3Description',
              code: 'service3Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://www.example.com'
          readMoreInNewTab={true}
          placement={{ vertical: 'bottom', horizontal: 'left' }}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      act(() => {
        getByText('customizeButtonLabel').click()
      })

      act(() => {
        getByText('customizeAcceptAllButtonLabel').click()
        vi.runAllTimers()
      })

      expect(setCookie).toHaveBeenCalledTimes(1)
      expect(setCookie).toHaveBeenCalledWith({
        name: 'hide-notice',
        value: 'true',
        expires: 30,
        secure: false,
        httpOnly: false,
        sameSite: 'lax',
      })
      expect(onAcceptAllButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptAllButtonClick).toHaveBeenCalledWith([
        'service1Code',
        'service2Code',
        'service3Code',
      ])
    })
  })

  it('should get cookie on mount', () => {
    render(
      <CookieNotice
        acceptAllButtonLabel='acceptAllButtonLabel'
        onAcceptAllButtonClick={() => {}}
        declineAllButtonLabel='declineAllButtonLabel'
        onDeclineAllButtonClick={() => {}}
        customizeButtonLabel='customizeButtonLabel'
        customizeTitleLabel='customizeTitleLabel'
        services={[
          {
            name: 'service1Name',
            description: 'service1Description',
            code: 'service1Code',
            alwaysActive: true,
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
            alwaysActive: false,
          },
        ]}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
        alwaysActiveLabel='alwaysActiveLabel'
        customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
        customizeAcceptAllTimeout={1000}
        titleLabel='titleLabel'
        descriptionLabel='descriptionLabel'
        readMoreLabel='readMoreLabel'
        readMoreLink='https://www.example.com'
        readMoreInNewTab={true}
        placement={{ vertical: 'bottom', horizontal: 'left' }}
        cookieOptions={{
          name: 'hide-notice',
          value: 'true',
          expires: 30,
          secure: false,
          httpOnly: false,
          sameSite: 'lax',
        }}
      />,
    )

    expect(getCookieValue).toHaveBeenCalledTimes(1)
    expect(getCookieValue).toHaveBeenCalledWith('hide-notice')
  })

  it('should switch views', () => {
    const { getByText, getByLabelText } = render(
      <CookieNotice
        acceptAllButtonLabel='acceptAllButtonLabel'
        onAcceptAllButtonClick={() => {}}
        declineAllButtonLabel='declineAllButtonLabel'
        onDeclineAllButtonClick={() => {}}
        customizeButtonLabel='customizeButtonLabel'
        customizeTitleLabel='customizeTitleLabel'
        services={[
          {
            name: 'service1Name',
            description: 'service1Description',
            code: 'service1Code',
            alwaysActive: true,
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
            alwaysActive: false,
          },
        ]}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
        alwaysActiveLabel='alwaysActiveLabel'
        customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
        customizeAcceptAllTimeout={1000}
        titleLabel='titleLabel'
        descriptionLabel='descriptionLabel'
        readMoreLabel='readMoreLabel'
        readMoreLink='https://www.example.com'
        readMoreInNewTab={true}
        placement={{ vertical: 'bottom', horizontal: 'left' }}
        cookieOptions={{
          name: 'hide-notice',
          value: 'true',
          expires: 30,
          secure: false,
          httpOnly: false,
          sameSite: 'lax',
        }}
      />,
    )

    expect(getByText('titleLabel')).toBeInTheDocument()
    expect(getByText('descriptionLabel')).toBeInTheDocument()
    expect(getByText('readMoreLabel')).toBeInTheDocument()
    expect(getByText('acceptAllButtonLabel')).toBeInTheDocument()
    expect(getByText('customizeButtonLabel')).toBeInTheDocument()
    expect(getByText('declineAllButtonLabel')).toBeInTheDocument()

    act(() => {
      getByText('customizeButtonLabel').click()
    })

    expect(getByText('customizeTitleLabel')).toBeInTheDocument()
    expect(getByText('alwaysActiveLabel')).toBeInTheDocument()
    expect(getByLabelText('service1Code')).toBeInTheDocument()
    expect(getByLabelText('service2Code')).toBeInTheDocument()
    expect(getByText('acceptButtonLabel')).toBeInTheDocument()
    expect(getByText('customizeAcceptAllButtonLabel')).toBeInTheDocument()
    expect(getByText('backButtonLabel')).toBeInTheDocument()

    act(() => {
      getByText('backButtonLabel').click()
    })

    expect(getByText('titleLabel')).toBeInTheDocument()
    expect(getByText('descriptionLabel')).toBeInTheDocument()
    expect(getByText('readMoreLabel')).toBeInTheDocument()
    expect(getByText('acceptAllButtonLabel')).toBeInTheDocument()
    expect(getByText('customizeButtonLabel')).toBeInTheDocument()
    expect(getByText('declineAllButtonLabel')).toBeInTheDocument()
  })

  describe('should handle classNames', () => {
    it('should add hide-with-animation class', () => {
      const { getByText } = render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://www.example.com'
          readMoreInNewTab={true}
          placement={{ vertical: 'bottom', horizontal: 'left' }}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      const cookieNoticeBeforeAccept = document.querySelector(
        '.react-cookienotice-root',
      )

      if (!cookieNoticeBeforeAccept) {
        throw new Error('Cookie notice not found')
      }

      expect(cookieNoticeBeforeAccept.className).not.toContain(
        'hide-with-animation',
      )

      act(() => {
        getByText('acceptAllButtonLabel').click()
      })

      const cookieNoticeAfterAccept = document.querySelector(
        '.react-cookienotice-root',
      )

      if (!cookieNoticeAfterAccept) {
        throw new Error('Cookie notice not found')
      }

      expect(cookieNoticeAfterAccept.className).toContain('hide-with-animation')
    })

    it('should mount without hidden class', () => {
      // @ts-ignore
      getCookieValue.mockReturnValue('')

      render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://www.example.com'
          readMoreInNewTab={true}
          placement={{ vertical: 'bottom', horizontal: 'left' }}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      const cookieNotice = document.querySelector('.react-cookienotice-root')

      if (!cookieNotice) {
        throw new Error('Cookie notice not found')
      }

      expect(cookieNotice.className).not.toContain('hidden')
    })

    it('should mount with hidden class', () => {
      // @ts-ignore
      getCookieValue.mockReturnValue('true')

      render(
        <CookieNotice
          acceptAllButtonLabel='acceptAllButtonLabel'
          onAcceptAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          onDeclineAllButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          customizeAcceptAllTimeout={1000}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://www.example.com'
          readMoreInNewTab={true}
          placement={{ vertical: 'bottom', horizontal: 'left' }}
          cookieOptions={{
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          }}
        />,
      )

      const cookieNotice = document.querySelector('.react-cookienotice-root')

      if (!cookieNotice) {
        throw new Error('Cookie notice not found')
      }

      expect(cookieNotice.className).toContain('hidden')
    })
  })
})
