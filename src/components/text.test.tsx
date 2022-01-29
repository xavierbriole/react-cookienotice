import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Text from './text'

describe('Text', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render', () => {
    const { container } = render(<Text cookieTextLabel='cookieTextLabel' />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display cookie text label', () => {
    const { getByText } = render(<Text cookieTextLabel='cookieTextLabel' />)

    expect(getByText('cookieTextLabel')).toBeInTheDocument()
  })
})
