// @flow

import * as React from 'react'
import styled from 'styled-components'
import clsx from 'clsx'

const TextStyled = styled.span`
  color: #000000;
  font-size: 16px;
  margin: 0 20px;

  &.dark {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

type Props = {|
  label: string,
  darkTheme: boolean,
|}

export default class Text extends React.Component<Props> {
  render(): React.Node {
    const { label, darkTheme } = this.props

    return (
      <TextStyled
        className={clsx('react-cookienotice-text', { dark: darkTheme })}
      >
        {label}
      </TextStyled>
    )
  }
}
