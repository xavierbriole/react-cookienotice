// @flow

import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-style: none;
  color: #1d1148;
  width: 100%;
  font-size: 16px;
  background: #ffffff;
  border-radius: 24px;
  padding: 12px 24px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.5s ease 0s;
  cursor: pointer;

  &:hover {
    color: #1d1148;
    background: #ffffff;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  &:focus {
    outline: 0;
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
`

type Props = {|
  label?: string,
  onButtonClick: () => void,
|}

export default class AcceptButton extends React.Component<Props> {
  render() {
    const { label, onButtonClick } = this.props

    return (
      <Button className='accept-button' onClick={onButtonClick}>
        <span>{label || 'Accept'}</span>
      </Button>
    )
  }
}
