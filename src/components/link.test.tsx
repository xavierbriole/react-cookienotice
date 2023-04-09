import { render } from '@testing-library/react'

import Link from './link'

describe('Link', () => {
  it('should render', () => {
    const { container } = render(<Link to='#' newTab={true} label='label' />)

    expect(container.firstChild).toMatchSnapshot()
  })

  describe('should maybe display link', () => {
    it('successfully', () => {
      const { getByText } = render(<Link to='#' newTab={true} label='label' />)

      expect(getByText('label')).toBeInTheDocument()
    })

    describe('with failure', () => {
      it('with only "to" prop', () => {
        const { getByText } = render(<Link to='#' />)

        expect(() => getByText('label')).toThrow()
      })

      it('with only "newTab" prop', () => {
        const { getByText } = render(<Link newTab={true} />)

        expect(() => getByText('label')).toThrow()
      })

      it('with only "label" prop', () => {
        const { getByText } = render(<Link label='label' />)

        expect(() => getByText('label')).toThrow()
      })
    })
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
