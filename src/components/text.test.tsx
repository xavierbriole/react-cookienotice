import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Text from './text'

describe('Text', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render', () => {
    const { container } = render(<Text className='className'>children</Text>)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display children', () => {
    const { getByText } = render(<Text>children</Text>)

    expect(getByText('children')).toBeInTheDocument()
  })

  it('should have class name', () => {
    const { getByText } = render(<Text className='className'>children</Text>)

    expect(getByText('children').parentElement).toHaveClass('className')
  })
})
