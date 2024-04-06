import { act, render } from '@testing-library/react'
import { vi } from 'vitest'

import CustomizeView from './customize-view'

describe('CustomizeView', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('should render', () => {
    it('with services', () => {
      const { asFragment } = render(
        <CustomizeView
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          onAcceptButtonClick={() => {}}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          onCustomizeAcceptAllButtonClick={() => {}}
          customizeAcceptAllTimeout={1000}
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('with services empty', () => {
      const { asFragment } = render(
        <CustomizeView
          customizeTitleLabel='customizeTitleLabel'
          services={[]}
          onAcceptButtonClick={() => {}}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          onCustomizeAcceptAllButtonClick={() => {}}
          customizeAcceptAllTimeout={1000}
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('should handle checkbox change', () => {
    const { getByLabelText } = render(
      <CustomizeView
        customizeTitleLabel='customizeTitleLabel'
        services={[
          {
            name: 'service1Name',
            description: 'service1Description',
            code: 'service1Code',
            alwaysActive: true,
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
            alwaysActive: false,
          },
          {
            name: 'service3Name',
            description: 'service3Description',
            code: 'service3Code',
            alwaysActive: false,
          },
        ]}
        onAcceptButtonClick={() => {}}
        acceptButtonLabel='acceptButtonLabel'
        onBackButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
        alwaysActiveLabel='alwaysActiveLabel'
        customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
        onCustomizeAcceptAllButtonClick={() => {}}
        customizeAcceptAllTimeout={1000}
      />,
    )

    expect(getByLabelText('service1Code')).toBeChecked()
    expect(getByLabelText('service2Code')).not.toBeChecked()
    expect(getByLabelText('service3Code')).not.toBeChecked()

    act(() => {
      getByLabelText('service2Code').click()
    })

    expect(getByLabelText('service2Code')).toBeChecked()

    act(() => {
      getByLabelText('service3Code').click()
    })

    expect(getByLabelText('service3Code')).toBeChecked()

    act(() => {
      getByLabelText('service3Code').click()
    })

    expect(getByLabelText('service3Code')).not.toBeChecked()
  })

  describe('should handle accept button click', () => {
    it('when no service is selected', () => {
      const onAcceptButtonClick = vi.fn()

      const { getByText } = render(
        <CustomizeView
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: false,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          onAcceptButtonClick={onAcceptButtonClick}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          onCustomizeAcceptAllButtonClick={() => {}}
          customizeAcceptAllTimeout={1000}
        />,
      )

      act(() => {
        getByText('acceptButtonLabel').click()
      })

      expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptButtonClick).toHaveBeenCalledWith([])
    })

    it('when one always active service is selected', () => {
      const onAcceptButtonClick = vi.fn()

      const { getByText } = render(
        <CustomizeView
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          onAcceptButtonClick={onAcceptButtonClick}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          onCustomizeAcceptAllButtonClick={() => {}}
          customizeAcceptAllTimeout={1000}
        />,
      )

      act(() => {
        getByText('acceptButtonLabel').click()
      })

      expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptButtonClick).toHaveBeenCalledWith(['service1Code'])
    })

    it('when one service is selected', () => {
      const onAcceptButtonClick = vi.fn()

      const { getByText, getByLabelText } = render(
        <CustomizeView
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
          ]}
          onAcceptButtonClick={onAcceptButtonClick}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          onCustomizeAcceptAllButtonClick={() => {}}
          customizeAcceptAllTimeout={1000}
        />,
      )

      act(() => {
        getByLabelText('service2Code').click()
      })

      act(() => {
        getByText('acceptButtonLabel').click()
      })

      expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptButtonClick).toHaveBeenCalledWith([
        'service2Code',
        'service1Code',
      ])
    })

    it('when multiple services are selected', () => {
      const onAcceptButtonClick = vi.fn()

      const { getByText, getByLabelText } = render(
        <CustomizeView
          customizeTitleLabel='customizeTitleLabel'
          services={[
            {
              name: 'service1Name',
              description: 'service1Description',
              code: 'service1Code',
              alwaysActive: true,
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
              alwaysActive: false,
            },
            {
              name: 'service3Name',
              description: 'service3Description',
              code: 'service3Code',
              alwaysActive: false,
            },
          ]}
          onAcceptButtonClick={onAcceptButtonClick}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
          alwaysActiveLabel='alwaysActiveLabel'
          customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
          onCustomizeAcceptAllButtonClick={() => {}}
          customizeAcceptAllTimeout={1000}
        />,
      )

      act(() => {
        getByLabelText('service2Code').click()
      })

      act(() => {
        getByLabelText('service3Code').click()
      })

      act(() => {
        getByText('acceptButtonLabel').click()
      })

      expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptButtonClick).toHaveBeenCalledWith([
        'service2Code',
        'service3Code',
        'service1Code',
      ])
    })
  })

  it('should handle accept all button click', () => {
    vi.useFakeTimers()

    const onCustomizeAcceptAllButtonClick = vi.fn()

    const { getByText, getByLabelText } = render(
      <CustomizeView
        customizeTitleLabel='customizeTitleLabel'
        services={[
          {
            name: 'service1Name',
            description: 'service1Description',
            code: 'service1Code',
            alwaysActive: true,
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
            alwaysActive: false,
          },
          {
            name: 'service3Name',
            description: 'service3Description',
            code: 'service3Code',
            alwaysActive: false,
          },
        ]}
        onAcceptButtonClick={() => {}}
        acceptButtonLabel='acceptButtonLabel'
        onBackButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
        alwaysActiveLabel='alwaysActiveLabel'
        customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
        onCustomizeAcceptAllButtonClick={onCustomizeAcceptAllButtonClick}
        customizeAcceptAllTimeout={1000}
      />,
    )

    expect(getByLabelText('service1Code')).toBeChecked()
    expect(getByLabelText('service2Code')).not.toBeChecked()
    expect(getByLabelText('service3Code')).not.toBeChecked()

    act(() => {
      getByText('customizeAcceptAllButtonLabel').click()
      vi.runAllTimers()
    })

    expect(getByLabelText('service1Code')).toBeChecked()
    expect(getByLabelText('service2Code')).toBeChecked()
    expect(getByLabelText('service3Code')).toBeChecked()

    expect(onCustomizeAcceptAllButtonClick).toHaveBeenCalledTimes(1)
    expect(onCustomizeAcceptAllButtonClick).toHaveBeenCalledWith([
      'service1Code',
      'service2Code',
      'service3Code',
    ])
  })

  it('should handle back button click', () => {
    const onBackButtonClick = vi.fn()

    const { getByText } = render(
      <CustomizeView
        customizeTitleLabel='customizeTitleLabel'
        services={[
          {
            name: 'service1Name',
            description: 'service1Description',
            code: 'service1Code',
            alwaysActive: true,
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
            alwaysActive: false,
          },
        ]}
        onAcceptButtonClick={() => {}}
        acceptButtonLabel='acceptButtonLabel'
        onBackButtonClick={onBackButtonClick}
        backButtonLabel='backButtonLabel'
        alwaysActiveLabel='alwaysActiveLabel'
        customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
        onCustomizeAcceptAllButtonClick={() => {}}
        customizeAcceptAllTimeout={1000}
      />,
    )

    act(() => {
      getByText('backButtonLabel').click()
    })

    expect(onBackButtonClick).toHaveBeenCalledTimes(1)
  })
})
