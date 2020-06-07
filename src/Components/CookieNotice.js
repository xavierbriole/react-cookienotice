// @flow

import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import AcceptButton from './AcceptButton'
import ReadMoreButton from './ReadMoreButton'
import CookieIcon from './CookieIcon'
import CookieText from './CookieText'

const Root = styled.div`
  opacity: 1;
  transition: opacity 0.5s linear;

  &.cookies-allowed {
    opacity: 0;
  }
`

const StickToBottom = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 1201;
`

const Wrapper = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 32px, rgba(0, 0, 0, 0.1) 0px 8px 32px;
  margin: 0 auto 48px;
  background: #ffffff;
  padding: 16px;
  border-radius: 32px;
`

type Props = {|
  acceptButtonLabel?: string,
  readMoreButtonLabel?: string,
  readMoreButtonLink?: string,
  openInNewTab?: boolean,
  cookieTextLabel?: string,
  reverseButtons?: boolean
|}

type State = {|
  cookiesAllowed: boolean
|}

export default class CookieNotice extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const cookieValue = Cookies.get('allow-cookies') === 'true'

    this.state = { cookiesAllowed: cookieValue }
  }

  setCookie() {
    Cookies.set('allow-cookies', 'true')

    this.setState({ cookiesAllowed: true })
  }

  render() {
    const {
      acceptButtonLabel,
      readMoreButtonLabel,
      readMoreButtonLink,
      openInNewTab,
      cookieTextLabel,
      reverseButtons
    } = this.props

    const { cookiesAllowed } = this.state

    const buttons = [
      <AcceptButton
        key='accept-button'
        label={acceptButtonLabel}
        onButtonClick={() => this.setCookie()}
      />,
      <ReadMoreButton
        key='read-more-button'
        label={readMoreButtonLabel}
        link={readMoreButtonLink}
        openInNewTab={openInNewTab}
      />
    ]

    return (
      <Root
        className={classnames('cookie-notice-root', {
          'cookies-allowed': cookiesAllowed
        })}
      >
        <StickToBottom className='stick-to-bottom'>
          <Wrapper className='wrapper'>
            <CookieIcon />
            <CookieText label={cookieTextLabel} />
            <div className='buttons'>
              {reverseButtons ? buttons.reverse() : buttons}
            </div>
          </Wrapper>
        </StickToBottom>
      </Root>
    )
  }
}
