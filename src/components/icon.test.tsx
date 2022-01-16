import React from 'react'
import { render } from '@testing-library/react'

import Icon from './icon'

describe('Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
