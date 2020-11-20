// @flow

import * as React from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
  color: #000000;
  font-size: 16px;
  margin: 0 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`

type Props = {|
  label: string,
|}

export default class Text extends React.Component<Props> {
  render(): React.Node {
    const { label } = this.props

    return <StyledText className='react-cookienotice-text'>{label}</StyledText>
  }
}
