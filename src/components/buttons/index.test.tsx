import React from 'react'
import { render } from '@testing-library/react'

import Buttons from './index'

describe('Buttons', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('with open in new tab false', () => {
    it('should render', () => {
      const { container } = render(
        <Buttons
          acceptButtonLabel='acceptButtonLabel'
          handleAcceptButtonClick={() => {}}
          readMoreButtonLabel='readMoreButtonLabel'
          readMoreButtonLink='readMoreButtonLink'
          readMoreButtonOpenInNewTab={false}
        />,
      )

      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('with open in new tab true', () => {
    it('should render', () => {
      const { container } = render(
        <Buttons
          acceptButtonLabel='acceptButtonLabel'
          handleAcceptButtonClick={() => {}}
          readMoreButtonLabel='readMoreButtonLabel'
          readMoreButtonLink='readMoreButtonLink'
          readMoreButtonOpenInNewTab={true}
        />,
      )

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
