import type { Meta, StoryObj } from '@storybook/react'

import CookieNotice from './cookie-notice'

const meta: Meta<typeof CookieNotice> = {
  title: 'CookieNotice',
  component: CookieNotice,
  tags: ['autodocs'],
  argTypes: {
    acceptAllButtonLabel: {
      description: 'The label for the accept all cookies button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Accept all' },
      },
    },
    onAcceptAllButtonClick: {
      description:
        'A callback function to be called when the accept all cookies button is clicked.',
      type: { name: 'function', required: false },
      action: 'onAcceptAllButtonClick',
    },
    declineAllButtonLabel: {
      description: 'The label for the decline all cookies button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Decline all' },
      },
    },
    onDeclineAllButtonClick: {
      description:
        'A callback function to be called when the decline all cookies button is clicked.',
      type: { name: 'function', required: false },
      action: 'onDeclineAllButtonClick',
    },
    customizeButtonLabel: {
      description: 'The label for the customize cookies button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Customize' },
      },
    },
    customizeTitleLabel: {
      description: 'The title for the customize view.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Customize' },
      },
    },
    services: {
      description: 'List of services to be customized.',
      // @ts-ignore
      type: { name: 'array', required: false },
    },
    acceptButtonLabel: {
      description: 'The label for the accept button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Accept' },
      },
    },
    onAcceptButtonClick: {
      description:
        'A callback function to be called when the accept cookies button is clicked. The first param returns the checked services.',
      type: { name: 'function', required: false },
      action: 'onAcceptButtonClick',
    },
    backButtonLabel: {
      description: 'The label for the back button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Back' },
      },
    },
    titleLabel: {
      description: 'The title for the cookie banner.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: {
          summary: 'Cookie consent',
        },
      },
    },
    descriptionLabel: {
      description: 'The description for the cookie banner.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: {
          summary:
            'By clicking "Accept", you consent to our website\'s use of cookies to provide you with the most relevant experience by remembering your cookie preferences.',
        },
      },
    },
    readMoreLabel: {
      description: 'The label for the read more link.',
      type: { name: 'string', required: false },
    },
    readMoreLink: {
      description: 'The link for the read more label.',
      type: { name: 'string', required: false },
    },
    readMoreInNewTab: {
      description: 'Whether the read more link should open in a new tab.',
      type: { name: 'boolean', required: false },
    },
    placement: {
      description: 'The placement of the cookie banner.',
      // @ts-ignore
      type: { name: 'object', required: false },
      table: {
        defaultValue: {
          summary: "{ vertical: 'bottom', horizontal: 'left' }",
        },
      },
    },
    cookieOptions: {
      description: 'Cookie options.',
      // @ts-ignore
      type: { name: 'object', required: false },
      table: {
        defaultValue: {
          summary:
            "{ name: 'hide-notice', value: 'true', expires: 30, secure: false, httpOnly: false, sameSite: 'lax' }",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CookieNotice>

export const Default: Story = {
  args: {
    acceptAllButtonLabel: undefined,
    onAcceptAllButtonClick: undefined,
    declineAllButtonLabel: undefined,
    onDeclineAllButtonClick: undefined,
    customizeButtonLabel: undefined,
    customizeTitleLabel: undefined,
    services: undefined,
    acceptButtonLabel: undefined,
    onAcceptButtonClick: undefined,
    backButtonLabel: undefined,
    titleLabel: undefined,
    descriptionLabel: undefined,
    readMoreLabel: undefined,
    readMoreLink: undefined,
    readMoreInNewTab: undefined,
    placement: undefined,
    cookieOptions: undefined,
  },
}

export const WithOverriddenLabels: Story = {
  args: {
    acceptAllButtonLabel: 'acceptAllButtonLabel',
    declineAllButtonLabel: 'declineAllButtonLabel',
    customizeButtonLabel: 'customizeButtonLabel',
    customizeTitleLabel: 'customizeTitleLabel',
    services: [
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
    ],
    acceptButtonLabel: 'acceptButtonLabel',
    backButtonLabel: 'backButtonLabel',
    titleLabel: 'titleLabel',
    descriptionLabel: 'descriptionLabel',
    readMoreLabel: 'readMoreLabel',
    readMoreLink: 'https://www.example.com',
    readMoreInNewTab: true,
  },
}

export const WithCustomServices: Story = {
  args: {
    services: [
      {
        name: 'Google Analytics',
        description:
          'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
        code: 'GOOGLE_ANALYTICS',
      },
      {
        name: 'HubSpot',
        description:
          'HubSpot is a developer and marketer of software products for inbound marketing, sales, and customer service.',
        code: 'HUBSPOT',
      },
    ],
  },
}

export const WithReadMore: Story = {
  args: {
    readMoreLabel: 'En savoir plus',
    readMoreLink: 'https://www.example.com',
    readMoreInNewTab: true,
  },
}
