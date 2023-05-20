import { render } from '@testing-library/react'
import { vi } from 'vitest'

import Button from './button'

describe('Button', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should render', () => {
    const { asFragment } = render(<Button onClick={() => {}}>children</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should display button', () => {
    const { getByText } = render(<Button>children</Button>)

    expect(getByText('children')).toBeInTheDocument()
  })

  it('should call onClick', () => {
    const onClick = vi.fn()

    const { getByText } = render(<Button onClick={onClick}>children</Button>)

    const button = getByText('children')

    button.click()

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
