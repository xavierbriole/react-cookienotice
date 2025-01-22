import { act, render } from '@testing-library/react'
import { vi } from 'vitest'

import DefaultView from './default-view'

describe('DefaultView', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe('should render', () => {
    describe('services', () => {
      it('with services', () => {
        const { asFragment } = render(
          <DefaultView
            titleLabel='titleLabel'
            descriptionLabel='descriptionLabel'
            onAcceptAllButtonClick={() => {}}
            acceptAllButtonLabel='acceptAllButtonLabel'
            onCustomizeButtonClick={() => {}}
            customizeButtonLabel='customizeButtonLabel'
            onDeclineAllButtonClick={() => {}}
            declineAllButtonLabel='declineAllButtonLabel'
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
          />,
        )

        expect(asFragment()).toMatchSnapshot()
      })

      it('with services empty', () => {
        const { asFragment } = render(
          <DefaultView
            titleLabel='titleLabel'
            descriptionLabel='descriptionLabel'
            onAcceptAllButtonClick={() => {}}
            acceptAllButtonLabel='acceptAllButtonLabel'
            onCustomizeButtonClick={() => {}}
            customizeButtonLabel='customizeButtonLabel'
            onDeclineAllButtonClick={() => {}}
            declineAllButtonLabel='declineAllButtonLabel'
            services={[]}
          />,
        )

        expect(asFragment()).toMatchSnapshot()
      })

      it('without services', () => {
        const { asFragment } = render(
          <DefaultView
            titleLabel='titleLabel'
            descriptionLabel='descriptionLabel'
            onAcceptAllButtonClick={() => {}}
            acceptAllButtonLabel='acceptAllButtonLabel'
            onCustomizeButtonClick={() => {}}
            customizeButtonLabel='customizeButtonLabel'
            onDeclineAllButtonClick={() => {}}
            declineAllButtonLabel='declineAllButtonLabel'
            services={undefined}
          />,
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })

    describe('read more', () => {
      it('with read more link', () => {
        const { asFragment } = render(
          <DefaultView
            titleLabel='titleLabel'
            descriptionLabel='descriptionLabel'
            readMoreLink='readMoreLink'
            readMoreInNewTab={true}
            readMoreLabel='readMoreLabel'
            onAcceptAllButtonClick={() => {}}
            acceptAllButtonLabel='acceptAllButtonLabel'
            onCustomizeButtonClick={() => {}}
            customizeButtonLabel='customizeButtonLabel'
            onDeclineAllButtonClick={() => {}}
            declineAllButtonLabel='declineAllButtonLabel'
          />,
        )

        expect(asFragment()).toMatchSnapshot()
      })

      it('without read more link', () => {
        const { asFragment } = render(
          <DefaultView
            titleLabel='titleLabel'
            descriptionLabel='descriptionLabel'
            readMoreLink={undefined}
            readMoreInNewTab={undefined}
            readMoreLabel={undefined}
            onAcceptAllButtonClick={() => {}}
            acceptAllButtonLabel='acceptAllButtonLabel'
            onCustomizeButtonClick={() => {}}
            customizeButtonLabel='customizeButtonLabel'
            onDeclineAllButtonClick={() => {}}
            declineAllButtonLabel='declineAllButtonLabel'
          />,
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })

  describe('should handle accept all button click', () => {
    it('with no service', () => {
      const onAcceptAllButtonClick = vi.fn()

      const { getByText } = render(
        <DefaultView
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLink='readMoreLink'
          readMoreInNewTab={true}
          readMoreLabel='readMoreLabel'
          onAcceptAllButtonClick={onAcceptAllButtonClick}
          acceptAllButtonLabel='acceptAllButtonLabel'
          onCustomizeButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          onDeclineAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          services={undefined}
        />,
      )

      act(() => {
        getByText('acceptAllButtonLabel').click()
      })

      expect(onAcceptAllButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptAllButtonClick).toHaveBeenCalledWith(undefined)
    })

    it('with services empty', () => {
      const onAcceptAllButtonClick = vi.fn()

      const { getByText } = render(
        <DefaultView
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLink='readMoreLink'
          readMoreInNewTab={true}
          readMoreLabel='readMoreLabel'
          onAcceptAllButtonClick={onAcceptAllButtonClick}
          acceptAllButtonLabel='acceptAllButtonLabel'
          onCustomizeButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          onDeclineAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
          services={[]}
        />,
      )

      act(() => {
        getByText('acceptAllButtonLabel').click()
      })

      expect(onAcceptAllButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptAllButtonClick).toHaveBeenCalledWith([])
    })

    it('with services', () => {
      const onAcceptAllButtonClick = vi.fn()

      const { getByText } = render(
        <DefaultView
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLink='readMoreLink'
          readMoreInNewTab={true}
          readMoreLabel='readMoreLabel'
          onAcceptAllButtonClick={onAcceptAllButtonClick}
          acceptAllButtonLabel='acceptAllButtonLabel'
          onCustomizeButtonClick={() => {}}
          customizeButtonLabel='customizeButtonLabel'
          onDeclineAllButtonClick={() => {}}
          declineAllButtonLabel='declineAllButtonLabel'
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
        />,
      )

      act(() => {
        getByText('acceptAllButtonLabel').click()
      })

      expect(onAcceptAllButtonClick).toHaveBeenCalledTimes(1)
      expect(onAcceptAllButtonClick).toHaveBeenCalledWith([
        'service1Code',
        'service2Code',
      ])
    })
  })
})
