// @flow

import React from 'react'
import styled from '@emotion/styled'

// $FlowFixMe: Flow error from emotion package - https://github.com/emotion-js/emotion/issues/1913
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

  &:not(:first-of-type) {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    &:not(:first-of-type) {
      margin-left: 0;
    }

    font-size: 12px;
    margin: 5px 0;
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
