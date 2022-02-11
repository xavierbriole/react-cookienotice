import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ReadMoreButton from './read-more'

export default {
  title: 'Buttons/ReadMoreButton',
  component: ReadMoreButton,
  argTypes: {
    readMoreButtonLabel: {
      description: 'The label for the button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'Read more' },
      },
    },
    readMoreButtonLink: {
      description: 'The link for the button.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'http://aboutcookies.org/' },
      },
    },
    readMoreButtonOpenInNewTab: {
      description: 'Whether the button should open in a new tab.',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
} as ComponentMeta<typeof ReadMoreButton>

const Template: ComponentStory<typeof ReadMoreButton> = (args) => (
  <ReadMoreButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  readMoreButtonLabel: 'Read more',
  readMoreButtonLink: 'http://aboutcookies.org/',
  readMoreButtonOpenInNewTab: true,
}
