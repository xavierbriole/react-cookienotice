// @flow

import * as React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  font-size: 16px;
  height: auto;
  color: #b5b5b5;
  padding: 10px 18px;
  border: 1px solid #b5b5b5;
  border-radius: 24px;
  box-shadow: none;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.5s ease 0s;

  &:hover {
    color: #000000;
    border-color: #000000;
  }

  &:not(:first-child) {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    &:not(:first-child) {
      margin-left: 0;
    }

    font-size: 12px;
    margin: 5px 0;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      color: #ffffff;
      border-color: #ffffff;
    }
  }
`

type Props = {|
  label: string,
  link: string,
  openInNewTab: boolean,
|}

export default class ReadMoreButton extends React.Component<Props> {
  render() {
    const { label, link, openInNewTab } = this.props

    return (
      <Button
        className='read-more-button'
        href={link}
        target={openInNewTab ? '_blank' : '_self'}
      >
        {label}
      </Button>
    )
  }
}
