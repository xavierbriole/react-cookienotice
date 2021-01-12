// @flow

import * as React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import Buttons from './Buttons'
import Icon from './Icon'
import Text from './Text'
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
  validateCookieName,
  validateDarkTheme,
} from '../Validator/index'
import { getCookie, setCookie } from '../Helpers/cookies'
import packageJson from '../../package.json'

type WrapperProps = {
  justifyContent: 'space-around' | 'space-between',
  maxWidth: number,
  borderRadius: number,
}

const RootStyled = styled.div`
  opacity: 1;
  transition: opacity 0.5s linear;

  &.cookies-allowed {
    opacity: 0;
  }
`

const StickToBottomStyled = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 1201;
`

const WrapperStyled: React.ComponentType<WrapperProps> = styled.div`
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

  &.dark {
    background: #3a3a3a;
  }

  @media (max-width: ${({ maxWidth }) => maxWidth + 48}px) {
    margin-left: 48px;
    margin-right: 48px;
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
  cookieName?: string,
  darkTheme?: boolean,
|}

type State = {|
  cookiesAllowed: boolean,
  darkTheme: boolean,
|}

export default class CookieNotice extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const userCookiesAllowed =
      getCookie(validateCookieName(props.cookieName)) === 'true'
    const userSetDarkTheme = validateDarkTheme(props.darkTheme)

    this.state = {
      cookiesAllowed: userCookiesAllowed,
      darkTheme: userSetDarkTheme,
    }
  }

  setCookie(): void {
    const { cookieExpiration, cookieName } = this.props

    const userCookieExpiration = validateCookieExpiration(cookieExpiration)
    const userCookieName = validateCookieName(cookieName)

    this.setState({ cookiesAllowed: true }, () => {
      setCookie(userCookieName, 'true', userCookieExpiration)
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

    const { cookiesAllowed, darkTheme } = this.state

    return (
      <RootStyled
        className={clsx(
          `react-cookienotice-root version-${packageJson.version}`,
          {
            'cookies-allowed': cookiesAllowed,
          }
        )}
      >
        <StickToBottomStyled className='react-cookienotice-stick-to-bottom'>
          <WrapperStyled
            className={clsx('react-cookienotice-wrapper', {
              dark: darkTheme,
            })}
            borderRadius={validateBorderRadius(borderRadius)}
            justifyContent={validateJustifyContent(justifyContent)}
            maxWidth={validateMaxWidth(maxWidth)}
          >
            <Icon />
            <Text
              label={validateCookieTextLabel(cookieTextLabel)}
              darkTheme={darkTheme}
            />
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
              darkTheme={darkTheme}
            />
          </WrapperStyled>
        </StickToBottomStyled>
      </RootStyled>
    )
  }
}
