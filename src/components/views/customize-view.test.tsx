import { act, render } from '@testing-library/react'
import { vi } from 'vitest'

import CustomizeView from './customize-view'

describe('CustomizeView', () => {
  beforeEach(() => {
    vi.resetAllMocks()
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
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
            },
          ]}
          onAcceptButtonClick={() => {}}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
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
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
          },
        ]}
        onAcceptButtonClick={() => {}}
        acceptButtonLabel='acceptButtonLabel'
        onBackButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
      />,
    )

    act(() => {
      getByLabelText('service1Code').click()
    })

    expect(getByLabelText('service1Code')).toBeChecked()

    act(() => {
      getByLabelText('service2Code').click()
    })

    expect(getByLabelText('service2Code')).toBeChecked()

    act(() => {
      getByLabelText('service1Code').click()
    })

    expect(getByLabelText('service1Code')).not.toBeChecked()
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
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
            },
          ]}
          onAcceptButtonClick={onAcceptButtonClick}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
        />,
      )

      act(() => {
        getByText('acceptButtonLabel').click()
      })

      expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptButtonClick).toHaveBeenCalledWith([])
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
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
            },
          ]}
          onAcceptButtonClick={onAcceptButtonClick}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
        />,
      )

      act(() => {
        getByLabelText('service1Code').click()
      })

      act(() => {
        getByText('acceptButtonLabel').click()
      })

      expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptButtonClick).toHaveBeenCalledWith(['service1Code'])
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
            },
            {
              name: 'service2Name',
              description: 'service2Description',
              code: 'service2Code',
            },
          ]}
          onAcceptButtonClick={onAcceptButtonClick}
          acceptButtonLabel='acceptButtonLabel'
          onBackButtonClick={() => {}}
          backButtonLabel='backButtonLabel'
        />,
      )

      act(() => {
        getByLabelText('service1Code').click()
      })

      act(() => {
        getByLabelText('service2Code').click()
      })

      act(() => {
        getByText('acceptButtonLabel').click()
      })

      expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptButtonClick).toHaveBeenCalledWith([
        'service1Code',
        'service2Code',
      ])
    })
  })

  it('should call onBackButtonClick', () => {
    const onBackButtonClick = vi.fn()

    const { getByText } = render(
      <CustomizeView
        customizeTitleLabel='customizeTitleLabel'
        services={[
          {
            name: 'service1Name',
            description: 'service1Description',
            code: 'service1Code',
          },
          {
            name: 'service2Name',
            description: 'service2Description',
            code: 'service2Code',
          },
        ]}
        onAcceptButtonClick={() => {}}
        acceptButtonLabel='acceptButtonLabel'
        onBackButtonClick={onBackButtonClick}
        backButtonLabel='backButtonLabel'
      />,
    )

    act(() => {
      getByText('backButtonLabel').click()
    })

    expect(onBackButtonClick).toHaveBeenCalledTimes(1)
  })
})
