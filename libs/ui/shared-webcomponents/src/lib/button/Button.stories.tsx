import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ButtonProps } from './Button'

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    component: { control: 'select', options: ['button', 'a'] },
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default Story

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Default = Template.bind({})
Default.args = { component: 'button', variant: 'secondary', size: 'md', fullWidth: false, children: 'Secondary' }
