import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './icon'

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = () => <Icon />

export const Default = Template.bind({})
