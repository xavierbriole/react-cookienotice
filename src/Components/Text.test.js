// @flow

import * as React from 'react'
import { shallow } from 'enzyme'
import Text from './Text'

describe('Text', () => {
  describe('without darkTheme', () => {
    const comp = <Text label='label' darkTheme={false} />

    it('should render', () => {
      expect(comp).toMatchSnapshot()
    })

    it('should have default class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.react-cookienotice-text')).toHaveLength(1)
    })

    it('should not have dark class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.dark')).toHaveLength(0)
    })
  })

  describe('with darkTheme', () => {
    const comp = <Text label='label' darkTheme />

    it('should render', () => {
      expect(comp).toMatchSnapshot()
    })

    it('should have default class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.react-cookienotice-text')).toHaveLength(1)
    })

    it('should have dark class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.dark')).toHaveLength(1)
    })
  })
})
