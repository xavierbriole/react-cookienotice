import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from './text'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    cookieTextLabel: {
      description: 'The label for the text.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: {
          summary:
            'This website uses cookies to improve your browsing experience.',
        },
      },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  cookieTextLabel:
    'This website uses cookies to improve your browsing experience.',
}
