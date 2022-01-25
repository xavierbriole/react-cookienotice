import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import ReadMoreButton from './read-more'

describe('ReadMoreButton', () => {
  describe('with open in new tab false', () => {
    it('should render', () => {
      const { container } = render(
        <ReadMoreButton
          readMoreButtonLabel='readMoreButtonLabel'
          readMoreButtonLink='readMoreButtonLink'
          readMoreButtonOpenInNewTab={false}
        />,
      )

      expect(container.firstChild).toMatchSnapshot()
    })

    it('should have right attributes', () => {
      const { getByText } = render(
        <ReadMoreButton
          readMoreButtonLabel='readMoreButtonLabel'
          readMoreButtonLink='readMoreButtonLink'
          readMoreButtonOpenInNewTab={false}
        />,
      )

      const readMoreButton = getByText('readMoreButtonLabel')

      expect(readMoreButton.getAttribute('target')).toBe('_self')
      expect(readMoreButton.getAttribute('rel')).toBe(null)
    })
  })

  describe('with open in new tab true', () => {
    it('should render', () => {
      const { container } = render(
        <ReadMoreButton
          readMoreButtonLabel='readMoreButtonLabel'
          readMoreButtonLink='readMoreButtonLink'
          readMoreButtonOpenInNewTab={true}
        />,
      )

      expect(container.firstChild).toMatchSnapshot()
    })

    it('should have right attributes', () => {
      const { getByText } = render(
        <ReadMoreButton
          readMoreButtonLabel='readMoreButtonLabel'
          readMoreButtonLink='readMoreButtonLink'
          readMoreButtonOpenInNewTab={true}
        />,
      )

      const readMoreButton = getByText('readMoreButtonLabel')

      expect(readMoreButton.getAttribute('target')).toBe('_blank')
      expect(readMoreButton.getAttribute('rel')).toBe('noreferrer')
    })
  })

  it('should display read more button label', () => {
    const { getByText } = render(
      <ReadMoreButton
        readMoreButtonLabel='readMoreButtonLabel'
        readMoreButtonLink='readMoreButtonLink'
        readMoreButtonOpenInNewTab={false}
      />,
    )

    expect(getByText('readMoreButtonLabel')).toBeInTheDocument()
  })
})
