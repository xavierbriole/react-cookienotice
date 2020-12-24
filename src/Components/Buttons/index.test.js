// @flow

import * as React from 'react'
import { shallow } from 'enzyme'
import Buttons from './index'
import AcceptButton from './AcceptButton'
import ReadMoreButton from './ReadMoreButton'

describe('Buttons', () => {
  it('should render', () => {
    const wrapper = (
      <Buttons
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        readMoreButtonLabel='readMoreButtonLabel'
        readMoreButtonLink='readMoreButtonLink'
        readMoreButtonOpenInNewTab={false}
        reverseButtons={false}
        darkTheme={false}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('should manage reverse buttons', () => {
    it('without reverse', () => {
      const wrapper = shallow(
        <Buttons
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          readMoreButtonLabel='readMoreButtonLabel'
          readMoreButtonLink='readMoreButtonLink'
          readMoreButtonOpenInNewTab={false}
          reverseButtons={false}
          darkTheme={false}
        />
      )

      expect(wrapper.childAt(0).is(AcceptButton)).toBeTruthy()
      expect(wrapper.childAt(1).is(ReadMoreButton)).toBeTruthy()
    })

    it('with reverse', () => {
      const wrapper = shallow(
        <Buttons
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          readMoreButtonLabel='readMoreButtonLabel'
          readMoreButtonLink='readMoreButtonLink'
          readMoreButtonOpenInNewTab={false}
          reverseButtons
          darkTheme={false}
        />
      )

      expect(wrapper.childAt(0).is(ReadMoreButton)).toBeTruthy()
      expect(wrapper.childAt(1).is(AcceptButton)).toBeTruthy()
    })
  })
})
