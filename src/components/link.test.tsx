import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Link from './link'

describe('Link', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render', () => {
    const { container } = render(
      <Link to='#' newTab={true}>
        children
      </Link>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display children', () => {
    const { getByText } = render(<Link to='#'>children</Link>)

    expect(getByText('children')).toBeInTheDocument()
  })

  it('should open in new tab', () => {
    const { getByText } = render(
      <Link to='#' newTab={true}>
        children
      </Link>,
    )

    const link = getByText('children')

    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noreferrer')
  })

  it('should open in same tab', () => {
    const { getByText } = render(
      <Link to='#' newTab={false}>
        children
      </Link>,
    )

    const link = getByText('children')

    expect(link.getAttribute('target')).toBe('_self')
    expect(link.getAttribute('rel')).toBe(null)
  })
})
