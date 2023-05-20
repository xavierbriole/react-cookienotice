import { render } from '@testing-library/react'

import Link from './link'

describe('Link', () => {
  describe('should render', () => {
    it('with all props', () => {
      const { asFragment } = render(<Link to='#' newTab={true} label='label' />)

      expect(asFragment()).toMatchSnapshot()
    })

    it('without props', () => {
      const { asFragment } = render(
        <Link to={undefined} newTab={undefined} label={undefined} />,
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('should display link', () => {
    const { getByText } = render(<Link to='#' newTab={true} label='label' />)

    expect(getByText('label')).toBeInTheDocument()
  })

  it('should open in new tab', () => {
    const { getByText } = render(<Link to='#' newTab={true} label='label' />)

    const link = getByText('label')

    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noreferrer')
  })

  it('should open in same tab', () => {
    const { getByText } = render(<Link to='#' newTab={false} label='label' />)

    const link = getByText('label')

    expect(link.getAttribute('target')).toBe('_self')
    expect(link.getAttribute('rel')).toBe(null)
  })
})
