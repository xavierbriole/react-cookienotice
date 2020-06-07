// @flow

import React from 'react'
import styled from 'styled-components'

const Label = styled.span`
  margin: 0 20px;
`

type Props = {|
  label?: string
|}

export default class CookieText extends React.Component<Props> {
  render() {
    const { label } = this.props

    return (
      <Label className='cookie-text'>
        {label ||
          'This website uses cookies to improve your browsing experience.'}
      </Label>
    )
  }
}
