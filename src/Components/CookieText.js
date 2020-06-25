// @flow

import React from 'react'
import styled from '@emotion/styled'

// $FlowFixMe: Flow error from emotion package - https://github.com/emotion-js/emotion/issues/1913
const Label = styled.span`
  font-size: 16px;
  margin: 0 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

type Props = {|
  label: string,
|}

export default class CookieText extends React.Component<Props> {
  render() {
    const { label } = this.props

    return <Label className='cookie-text'>{label}</Label>
  }
}
