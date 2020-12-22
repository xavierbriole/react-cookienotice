// @flow

import * as React from 'react'
import Icon from './Icon'

describe('Icon', () => {
  it('should render', () => {
    const wrapper = <Icon />

    expect(wrapper).toMatchSnapshot()
  })
})
