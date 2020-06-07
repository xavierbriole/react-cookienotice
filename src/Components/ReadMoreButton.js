// @flow

import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  font-size: 16px;
  height: auto;
  color: #8c97a1;
  padding: 10px 18px;
  border: 1px solid #e0e2e4;
  border-radius: 24px;
  box-shadow: none;
  text-decoration: none;

  &:hover {
    color: #1d1148;
    background: #ffffff;
  }

  &:not(:first-child) {
    margin-left: 8px;
  }
`

type Props = {|
  label?: string,
  link?: string,
  openInNewTab?: boolean
|}

export default class ReadMoreButton extends React.Component<Props> {
  render() {
    const { label, link, openInNewTab } = this.props

    return (
      <Button
        className='read-more-button'
        href={link || 'https://www.google.com'}
        target={openInNewTab ? '_blank' : undefined}
      >
        {label || 'Read more'}
      </Button>
    )
  }
}
