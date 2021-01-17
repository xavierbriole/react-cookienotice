// @flow

import * as React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'

describe('Icon', () => {
  const comp = <Icon />

  it('should render', () => {
    expect(comp).toMatchSnapshot()
  })

  it('should have default class', () => {
    const wrapper = shallow(comp)
    expect(wrapper.find('.react-cookienotice-icon')).toHaveLength(1)
  })
})
