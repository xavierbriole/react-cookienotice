// @flow

import * as React from 'react'
import styled from 'styled-components'
import AcceptButton from './AcceptButton'
import ReadMoreButton from './ReadMoreButton'

const ButtonsWrapper = styled.div`
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
    } = this.props

    const buttons = [
      <AcceptButton
        key='accept-button'
        label={acceptButtonLabel}
        onButtonClick={onAcceptButtonClick}
      />,
      <ReadMoreButton
        key='read-more-button'
        label={readMoreButtonLabel}
        link={readMoreButtonLink}
        openInNewTab={readMoreButtonOpenInNewTab}
      />,
    ]

    return (
      <ButtonsWrapper className='buttons-wrapper'>
        {reverseButtons ? buttons.reverse() : buttons}
      </ButtonsWrapper>
    )
  }
}
