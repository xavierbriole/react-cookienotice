import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Buttons from './index'

export default {
  title: 'Buttons',
  component: Buttons,
  argTypes: {
    acceptButtonLabel: {
      description: 'The label for the accept button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Accept' },
      },
    },
    handleAcceptButtonClick: {
      description:
        'A callback function to be called when the accept button is clicked.',
      type: { name: 'function', required: false },
      action: 'handleAcceptButtonClick',
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
  },
} as ComponentMeta<typeof Buttons>

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />

export const Default = Template.bind({})
Default.args = {
  acceptButtonLabel: 'Accept',
  readMoreButtonLabel: 'Read more',
  readMoreButtonLink: 'http://aboutcookies.org/',
  readMoreButtonOpenInNewTab: true,
}
