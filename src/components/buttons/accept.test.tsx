import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import AcceptButton from './accept'

describe('AcceptButton', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render', () => {
    const { container } = render(
      <AcceptButton
        acceptButtonLabel='acceptButtonLabel'
        handleAcceptButtonClick={() => {}}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display accept button label', () => {
    const { getByText } = render(
      <AcceptButton
        acceptButtonLabel='acceptButtonLabel'
        handleAcceptButtonClick={() => {}}
      />,
    )

    expect(getByText('acceptButtonLabel')).toBeInTheDocument()
  })

  it('should call handleAcceptButtonClick', () => {
    const handleAcceptButtonClick = jest.fn()

    const { getByText } = render(
      <AcceptButton
        acceptButtonLabel='acceptButtonLabel'
        handleAcceptButtonClick={handleAcceptButtonClick}
      />,
    )

    const acceptButton = getByText('acceptButtonLabel')

    acceptButton.click()

    expect(handleAcceptButtonClick).toHaveBeenCalled()
  })
})
