import { render } from '@testing-library/react'

import Text from './text'

describe('Text', () => {
  describe('should render', () => {
    it('with className', () => {
      const { asFragment } = render(<Text className='className'>children</Text>)

      expect(asFragment()).toMatchSnapshot()
    })

    it('without className', () => {
      const { asFragment } = render(<Text className={undefined}>children</Text>)

      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('should display text', () => {
    const { getByText } = render(<Text>children</Text>)

    expect(getByText('children')).toBeInTheDocument()
  })
})
