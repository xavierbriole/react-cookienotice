// @flow

import React from 'react'
import styled from '@emotion/styled'

// $FlowFixMe: Flow error from emotion package - https://github.com/emotion-js/emotion/issues/1913
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
