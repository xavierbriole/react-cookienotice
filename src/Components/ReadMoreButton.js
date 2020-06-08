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
  white-space: nowrap;
  transition: all 0.5s ease 0s;

  &:hover {
    color: #1d1148;
    border-color: #1d1148;
    background: #ffffff;
  }

  &:not(:first-child) {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

type Props = {|
  label?: string,
  link?: string,
  openInNewTab?: boolean,
|}

export default class ReadMoreButton extends React.Component<Props> {
  computeOpenInNewTab(): '_blank' | '_self' {
    const { openInNewTab } = this.props

    if (typeof openInNewTab === 'undefined') {
      return '_blank'
    }

    return openInNewTab ? '_blank' : '_self'
  }

  render() {
    const { label, link } = this.props

    return (
      <Button
        className='read-more-button'
        href={link || 'http://aboutcookies.org/'}
        target={this.computeOpenInNewTab()}
      >
        {label || 'Read more'}
      </Button>
    )
  }
}
