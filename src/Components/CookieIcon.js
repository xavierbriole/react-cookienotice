// @flow

import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  &:before {
    content: '🍪';
    font-size: 32px;
  }
`

type Props = {||}

export default class CookieIcon extends React.Component<Props> {
  render() {
    return <Icon className='cookie-icon' />
  }
}
