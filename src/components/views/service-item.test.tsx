import { act, render } from '@testing-library/react'
import { vi } from 'vitest'

import ServiceItem from './service-item'

describe('ServiceItem', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe('should render', () => {
    it('with always active', () => {
      const { asFragment } = render(
        <ServiceItem
          name='serviceName'
          description='serviceDescription'
          code='serviceCode'
          alwaysActive={true}
          alwaysActiveLabel='alwaysActiveLabel'
          isChecked={false}
          onCheckboxChange={() => {}}
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('without always active', () => {
      const { asFragment } = render(
        <ServiceItem
          name='serviceName'
          description='serviceDescription'
          code='serviceCode'
          alwaysActive={false}
          alwaysActiveLabel='alwaysActiveLabel'
          isChecked={false}
          onCheckboxChange={() => {}}
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('with checked', () => {
      const { asFragment } = render(
        <ServiceItem
          name='serviceName'
          description='serviceDescription'
          code='serviceCode'
          alwaysActive={false}
          alwaysActiveLabel='alwaysActiveLabel'
          isChecked={true}
          onCheckboxChange={() => {}}
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('should toggle open class', () => {
    const { getByText } = render(
      <ServiceItem
        name='serviceName'
        description='serviceDescription'
        code='serviceCode'
        alwaysActive={false}
        alwaysActiveLabel='alwaysActiveLabel'
        isChecked={false}
        onCheckboxChange={() => {}}
      />,
    )

    const button = getByText('serviceName')

    expect(button.className).not.toContain('open')

    act(() => {
      button.click()
    })

    expect(button.className).toContain('open')

    act(() => {
      button.click()
    })

    expect(button.className).not.toContain('open')
  })

  it('should add maxHeight style', () => {
    const { getByText } = render(
      <ServiceItem
        name='serviceName'
        description='serviceDescription'
        code='serviceCode'
        alwaysActive={false}
        alwaysActiveLabel='alwaysActiveLabel'
        isChecked={false}
        onCheckboxChange={() => {}}
      />,
    )

    const button = getByText('serviceName')
    const content = button.nextElementSibling

    if (!(content instanceof HTMLElement)) {
      throw new Error('content is not HTMLElement')
    }

    expect(content.style.maxHeight).toBe('0')

    act(() => {
      button.click()
    })

    expect(content.style.maxHeight).toBe(`${content.scrollHeight}px`)

    act(() => {
      button.click()
    })

    expect(content.style.maxHeight).toBe('0')
  })

  it('should handle checkbox change', () => {
    const onCheckboxChange = vi.fn()

    const { getByLabelText } = render(
      <ServiceItem
        name='serviceName'
        description='serviceDescription'
        code='serviceCode'
        alwaysActive={false}
        alwaysActiveLabel='alwaysActiveLabel'
        isChecked={false}
        onCheckboxChange={onCheckboxChange}
      />,
    )

    act(() => {
      getByLabelText('serviceCode').click()
    })

    expect(onCheckboxChange).toHaveBeenCalledTimes(1)
    expect(onCheckboxChange).toHaveBeenCalledWith(expect.any(Object))
  })
})
