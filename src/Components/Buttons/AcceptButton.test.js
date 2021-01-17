// @flow

import * as React from 'react'
import { shallow } from 'enzyme'
import AcceptButton from './AcceptButton'

describe('AcceptButton', () => {
  describe('without darkTheme', () => {
    const comp = (
      <AcceptButton label='label' onButtonClick={() => {}} darkTheme={false} />
    )

    it('should render', () => {
      expect(comp).toMatchSnapshot()
    })

    it('should have default class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.react-cookienotice-accept-button')).toHaveLength(1)
    })

    it('should not have dark class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.dark')).toHaveLength(0)
    })
  })

  describe('with darkTheme', () => {
    const comp = (
      <AcceptButton label='label' onButtonClick={() => {}} darkTheme />
    )

    it('should render', () => {
      expect(comp).toMatchSnapshot()
    })

    it('should have default class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.react-cookienotice-accept-button')).toHaveLength(1)
    })

    it('should have dark class', () => {
      const wrapper = shallow(comp)
      expect(wrapper.find('.dark')).toHaveLength(1)
    })
  })

  it('should handle click', () => {
    const onClick = jest.fn()

    const wrapper = shallow(
      <AcceptButton label='label' onButtonClick={onClick} darkTheme={false} />
    )

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalled()
  })
})
