// @flow

import React, { type ComponentType } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import AcceptButton from './AcceptButton'
import ReadMoreButton from './ReadMoreButton'
import CookieIcon from './CookieIcon'
import CookieText from './CookieText'
import {
  validateAcceptButtonLabel,
  validateReadMoreButtonLabel,
  validateReadMoreButtonLink,
  validateOpenInNewTab,
  validateCookieTextLabel,
  validateReverseButtons,
  validateBorderRadius,
  validateJustifyContent,
  validateMaxWidth,
} from '../Validator'
import { getCookie, setCookie } from '../Helpers/cookies'

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

const Wrapper: ComponentType<WrapperProps> = styled.div`
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

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
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
|}

type State = {|
  cookiesAllowed: boolean,
|}

export default class CookieNotice extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const cookieValue = getCookie('allow-cookies') === 'true'

    this.state = { cookiesAllowed: cookieValue }
  }

  setCookie() {
    setCookie('allow-cookies', 'true')

    this.setState({ cookiesAllowed: true })
  }

  render() {
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

    const buttons = [
      <AcceptButton
        key='accept-button'
        label={validateAcceptButtonLabel(acceptButtonLabel)}
        onButtonClick={() => this.setCookie()}
      />,
      <ReadMoreButton
        key='read-more-button'
        label={validateReadMoreButtonLabel(readMoreButtonLabel)}
        link={validateReadMoreButtonLink(readMoreButtonLink)}
        openInNewTab={validateOpenInNewTab(openInNewTab)}
      />,
    ]

    return (
      <Root
        className={clsx('cookie-notice-root', {
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
            <ButtonsWrapper className='buttons-wrapper'>
              {validateReverseButtons(reverseButtons)
                ? buttons.reverse()
                : buttons}
            </ButtonsWrapper>
          </Wrapper>
        </StickToBottom>
      </Root>
    )
  }
}
