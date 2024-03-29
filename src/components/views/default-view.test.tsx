import { render } from '@testing-library/react'

import DefaultView from './default-view'

describe('DefaultView', () => {
  describe('should render', () => {
    it('with services', () => {
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
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('with services empty', () => {
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
          readMoreLink='readMoreLink'
          readMoreInNewTab={true}
          readMoreLabel='readMoreLabel'
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
})
