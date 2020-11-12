// @flow

import * as React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
  &:before {
    content: '🍪';
    font-size: 30px;
  }
`

export default class Icon extends React.Component<{}> {
  render(): React.Node {
    return <StyledIcon className='react-cookienotice-icon' />
  }
}
