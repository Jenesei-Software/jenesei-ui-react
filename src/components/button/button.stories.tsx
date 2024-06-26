import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Click',
    width: 'auto',
    type: 'button',
    genre: 'gray',
    size: 'medium',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isActive: false,
  },
}

export const Icon: Story = {
  args: {
    width: 'asHeight',
    type: 'button',
    icon: 'WiFi',
    genre: 'gray',
    size: 'medium',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isActive: false,
  },
}
