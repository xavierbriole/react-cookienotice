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
        'A callback function to be called when the accept all cookies button is clicked. The first param returns the services if any.',
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
    alwaysActiveLabel: {
      description: 'The label for the always active services.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Always active' },
      },
    },
    customizeAcceptAllButtonLabel: {
      description: 'The label for the accept all button in the customize view.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Accept all' },
      },
    },
    customizeAcceptAllTimeout: {
      description:
        'The timeout for the accept all button in the customize view.',
      type: { name: 'number', required: false },
      table: {
        defaultValue: { summary: '1000' },
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
    alwaysActiveLabel: undefined,
    customizeAcceptAllButtonLabel: undefined,
    customizeAcceptAllTimeout: undefined,
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
    ],
    acceptButtonLabel: 'acceptButtonLabel',
    backButtonLabel: 'backButtonLabel',
    alwaysActiveLabel: 'alwaysActiveLabel',
    customizeAcceptAllButtonLabel: 'customizeAcceptAllButtonLabel',
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
        name: 'Necessary Cookies',
        description:
          'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
        code: 'NECESSARY',
        alwaysActive: true,
      },
      {
        name: 'Functional Cookies',
        description:
          'Functional cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.',
        code: 'FUNCTIONAL',
      },
      {
        name: 'Performance Cookies',
        description:
          'Performance cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.',
        code: 'PERFORMANCE',
      },
      {
        name: 'Marketing Cookies',
        description:
          'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
        code: 'MARKETING',
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
