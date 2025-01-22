import { render } from '@testing-library/react'

import Text from './text'

describe('Text', () => {
  it('should render', () => {
    const { asFragment } = render(<Text>children</Text>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should display text', () => {
    const { getByText } = render(<Text>children</Text>)

    expect(getByText('children')).toBeInTheDocument()
  })
})
