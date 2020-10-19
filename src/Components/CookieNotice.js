// @flow

import * as React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import Buttons from './Buttons'
import CookieIcon from './CookieIcon'
import CookieText from './CookieText'
import {
  validateAcceptButtonLabel,
  validateReadMoreButtonLabel,
  validateReadMoreButtonLink,
  validateReadMoreButtonOpenInNewTab,
  validateCookieTextLabel,
  validateReverseButtons,
  validateBorderRadius,
  validateJustifyContent,
  validateMaxWidth,
  validateCookieExpiration,
} from '../Validator'
import { getCookie, setCookie } from '../Helpers/cookies'
import packageJson from '../../package.json'

type WrapperProps = {
  justifyContent: 'space-around' | 'space-between',
  maxWidth: number,
  borderRadius: number,
}

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

const Wrapper: React.ComponentType<WrapperProps> = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  max-width: ${({ maxWidth }) => maxWidth}px;
  opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 32px, rgba(0, 0, 0, 0.1) 0px 8px 32px;
  margin: 0 auto 48px;
  background: #ffffff;
  padding: 16px;
  border-radius: ${({ borderRadius }) => borderRadius}px;

  @media (max-width: ${({ maxWidth }) => maxWidth + 48}px) {
    margin-left: 48px;
    margin-right: 48px;
  }

  @media (prefers-color-scheme: dark) {
    background: #3a3a3a;
  }
`

type Props = {|
  acceptButtonLabel?: string,
  readMoreButtonLabel?: string,
  readMoreButtonLink?: string,
  openInNewTab?: boolean,
  cookieTextLabel?: string,
  reverseButtons?: boolean,
  borderRadius?: number,
  justifyContent?: 'space-around' | 'space-between',
  maxWidth?: number,
  cookieExpiration?: number,
|}

type State = {|
  cookiesAllowed: boolean,
|}

export default class CookieNotice extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const userCookiesAllowed = getCookie('allow-cookies') === 'true'

    this.state = { cookiesAllowed: userCookiesAllowed }
  }

  setCookie(): void {
    const { cookieExpiration } = this.props

    const userCookieExpiration = validateCookieExpiration(cookieExpiration)

    this.setState({ cookiesAllowed: true }, () => {
      setCookie('allow-cookies', 'true', userCookieExpiration)
    })
  }

  render(): React.Node {
    const {
      acceptButtonLabel,
      readMoreButtonLabel,
      readMoreButtonLink,
      openInNewTab,
      cookieTextLabel,
      reverseButtons,
      borderRadius,
      justifyContent,
      maxWidth,
    } = this.props

    const { cookiesAllowed } = this.state

    return (
      <Root
        className={clsx(`cookie-notice-root version-${packageJson.version}`, {
          'cookies-allowed': cookiesAllowed,
        })}
      >
        <StickToBottom className='stick-to-bottom'>
          <Wrapper
            className='wrapper'
            borderRadius={validateBorderRadius(borderRadius)}
            justifyContent={validateJustifyContent(justifyContent)}
            maxWidth={validateMaxWidth(maxWidth)}
          >
            <CookieIcon />
            <CookieText label={validateCookieTextLabel(cookieTextLabel)} />
            <Buttons
              acceptButtonLabel={validateAcceptButtonLabel(acceptButtonLabel)}
              onAcceptButtonClick={() => this.setCookie()}
              readMoreButtonLabel={validateReadMoreButtonLabel(
                readMoreButtonLabel
              )}
              readMoreButtonLink={validateReadMoreButtonLink(
                readMoreButtonLink
              )}
              readMoreButtonOpenInNewTab={validateReadMoreButtonOpenInNewTab(
                openInNewTab
              )}
              reverseButtons={validateReverseButtons(reverseButtons)}
            />
          </Wrapper>
        </StickToBottom>
      </Root>
    )
  }
}
