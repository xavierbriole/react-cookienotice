import { render } from '@testing-library/react'
import { vi } from 'vitest'

import Button from './button'

describe('Button', () => {
  it('should render', () => {
    const { container } = render(<Button onClick={() => {}}>children</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display children', () => {
    const { getByText } = render(<Button>children</Button>)

    expect(getByText('children')).toBeInTheDocument()
  })

  it('should call onClick', () => {
    const onClick = vi.fn()

    const { getByText } = render(<Button onClick={onClick}>children</Button>)

    const button = getByText('children')

    button.click()

    expect(onClick).toHaveBeenCalled()
  })
})
