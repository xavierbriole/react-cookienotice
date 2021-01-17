// @flow

import * as React from 'react'
import { shallow } from 'enzyme'
import ReadMoreButton from './ReadMoreButton'

describe('ReadMoreButton', () => {
  describe('without darkTheme', () => {
    const comp = (
      <ReadMoreButton
        label='label'
        link='link'
        openInNewTab={false}
        darkTheme={false}
      />
    )

    it('should render', () => {
      expect(comp).toMatchSnapshot()
    })

    it('should have default class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.react-cookienotice-read-more-button')).toHaveLength(
        1
      )
    })

    it('should not have dark class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.dark')).toHaveLength(0)
    })
  })

  describe('with darkTheme', () => {
    const comp = (
      <ReadMoreButton
        label='label'
        link='link'
        openInNewTab={false}
        darkTheme
      />
    )

    it('should render', () => {
      expect(comp).toMatchSnapshot()
    })

    it('should have default class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.react-cookienotice-read-more-button')).toHaveLength(
        1
      )
    })

    it('should have dark class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.dark')).toHaveLength(1)
    })
  })

  it('should have link', () => {
    const wrapper = shallow(
      <ReadMoreButton
        label='label'
        link='link'
        openInNewTab={false}
        darkTheme={false}
      />
    )

    expect(wrapper.prop('href')).toBe('link')
  })

  it('should open in same tab', () => {
    const wrapper = shallow(
      <ReadMoreButton
        label='label'
        link='link'
        openInNewTab={false}
        darkTheme={false}
      />
    )

    expect(wrapper.prop('target')).toBe('_self')
  })

  it('should open in new tab', () => {
    const wrapper = shallow(
      <ReadMoreButton
        label='label'
        link='link'
        openInNewTab
        darkTheme={false}
      />
    )

    expect(wrapper.prop('target')).toBe('_blank')
  })
})
