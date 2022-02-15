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
    declineButtonLabel: {
      description: 'The label for the decline button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Decline' },
      },
    },
    onDeclineButtonClick: {
      description:
        'A callback function to be called when the decline button is clicked.',
      type: { name: 'function', required: false },
      action: 'onDeclineButtonClick',
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
          summary: 'hide-notice',
        },
      },
    },
  },
} as ComponentMeta<typeof CookieNotice>

const Template: ComponentStory<typeof CookieNotice> = (args) => (
  <CookieNotice {...args} />
)

export const Default = Template.bind({})
