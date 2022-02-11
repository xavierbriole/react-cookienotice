import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CookieNotice from './cookie-notice'

export default {
  title: 'CookieNotice',
  component: CookieNotice,
  argTypes: {
    acceptButtonLabel: {
      description: 'The label for the accept button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Accept' },
      },
    },
    onAcceptButtonClick: {
      description:
        'A callback function to be called when the accept button is clicked.',
      type: { name: 'function', required: false },
      action: 'onAcceptButtonClick',
    },
    readMoreButtonLabel: {
      description: 'The label for the read more button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Read more' },
      },
    },
    readMoreButtonLink: {
      description: 'The link for the read more button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'http://aboutcookies.org/' },
      },
    },
    readMoreButtonOpenInNewTab: {
      description: 'Whether the read more button should open in a new tab.',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    cookieTextLabel: {
      description: 'The text for the cookie banner.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: {
          summary:
            'This website uses cookies to improve your browsing experience.',
        },
      },
    },
    cookieExpiration: {
      description:
        'Days after cookie expires and user should reaccept cookies.',
      type: { name: 'number', required: false },
      table: {
        defaultValue: {
          summary: '30',
        },
      },
    },
    cookieName: {
      description: 'The name of the cookie that saves the user consent.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: {
          summary: 'allow-cookies',
        },
      },
    },
  },
} as ComponentMeta<typeof CookieNotice>

const Template: ComponentStory<typeof CookieNotice> = (args) => (
  <CookieNotice {...args} />
)

export const Default = Template.bind({})
Default.args = {
  acceptButtonLabel: 'Accept',
  readMoreButtonLabel: 'Read more',
  readMoreButtonLink: 'http://aboutcookies.org/',
  readMoreButtonOpenInNewTab: true,
  cookieTextLabel:
    'This website uses cookies to improve your browsing experience.',
  cookieExpiration: 30,
  cookieName: 'allow-cookies',
}
