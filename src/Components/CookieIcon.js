// @flow

import * as React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  &:before {
    content: '🍪';
    font-size: 30px;
  }
`

export default class CookieIcon extends React.Component<{}> {
  render() {
    return <Icon className='cookie-icon' />
  }
}
