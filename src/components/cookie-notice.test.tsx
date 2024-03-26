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
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
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
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
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
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
            },
          ]}
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
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
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
          },
        ]}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
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
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
          },
        ]}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
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
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
          },
        ]}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={onAcceptButtonClick}
        backButtonLabel='backButtonLabel'
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
      getByLabelText('service1Code').click()
      getByLabelText('service2Code').click()
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
      'service1Code',
      'service2Code',
    ])
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
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
          },
        ]}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
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
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
          },
        ]}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
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
    expect(getByLabelText('service1Code')).toBeInTheDocument()
    expect(getByLabelText('service2Code')).toBeInTheDocument()
    expect(getByText('acceptButtonLabel')).toBeInTheDocument()
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
})
