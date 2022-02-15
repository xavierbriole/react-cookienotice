import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './button'

describe('Button', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render', () => {
    const { container } = render(<Button label='label' onClick={() => {}} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display label', () => {
    const { getByText } = render(<Button label='label' />)

    expect(getByText('label')).toBeInTheDocument()
  })

  it('should call onClick', () => {
    const onClick = jest.fn()

    const { getByText } = render(<Button label='label' onClick={onClick} />)

    const button = getByText('label')

    button.click()

    expect(onClick).toHaveBeenCalled()
  })
})
