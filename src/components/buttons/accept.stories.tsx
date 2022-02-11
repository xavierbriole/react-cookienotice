import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AcceptButton from './accept'

export default {
  title: 'Buttons/AcceptButton',
  component: AcceptButton,
  argTypes: {
    acceptButtonLabel: {
      description: 'The label for the button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Accept' },
      },
    },
    handleAcceptButtonClick: {
      description:
        'A callback function to be called when the button is clicked.',
      type: { name: 'function', required: false },
      action: 'handleAcceptButtonClick',
    },
  },
} as ComponentMeta<typeof AcceptButton>

const Template: ComponentStory<typeof AcceptButton> = (args) => (
  <AcceptButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  acceptButtonLabel: 'Accept',
}
