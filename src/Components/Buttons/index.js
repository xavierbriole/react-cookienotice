// @flow

import * as React from 'react'
import styled from 'styled-components'
import AcceptButton from './AcceptButton'
import ReadMoreButton from './ReadMoreButton'

const ButtonsWrapperStyled = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

type Props = {|
  acceptButtonLabel: string,
  onAcceptButtonClick: () => void,
  readMoreButtonLabel: string,
  readMoreButtonLink: string,
  readMoreButtonOpenInNewTab: boolean,
  reverseButtons: boolean,
  darkTheme: boolean,
|}

export default class Buttons extends React.Component<Props> {
  render(): React.Node {
    const {
      acceptButtonLabel,
      onAcceptButtonClick,
      readMoreButtonLabel,
      readMoreButtonLink,
      readMoreButtonOpenInNewTab,
      reverseButtons,
      darkTheme,
    } = this.props

    const buttons = [
      <AcceptButton
        key='accept-button'
        label={acceptButtonLabel}
        onButtonClick={onAcceptButtonClick}
        darkTheme={darkTheme}
      />,
      <ReadMoreButton
        key='read-more-button'
        label={readMoreButtonLabel}
        link={readMoreButtonLink}
        openInNewTab={readMoreButtonOpenInNewTab}
        darkTheme={darkTheme}
      />,
    ]

    return (
      <ButtonsWrapperStyled className='react-cookienotice-buttons-wrapper'>
        {reverseButtons ? buttons.reverse() : buttons}
      </ButtonsWrapperStyled>
    )
  }
}
