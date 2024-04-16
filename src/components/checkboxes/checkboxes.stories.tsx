import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Checkboxes } from '.'

const meta: Meta<typeof Checkboxes> = {
  component: Checkboxes,
  title: 'Checkbox/Checkboxes',
}

export default meta
type Story = StoryObj<typeof Checkboxes>

export const Default: Story = {
  args: {
    checkboxGenre: 'product',
    checkboxGenreType: 'secondary',
    checkBoxView: 'circle',
    checkboxWidth: '100%',
    checkboxIsHiddenBorder: false,
    multiple: true,
    size: 'large',
    value: [{ value: 0, label: 'First' }],
    options: [
      { value: 0, label: 'First' },
      { value: 1, label: 'Second' },
    ],
    labelField: 'label',
    valueField: 'value',
    width: '300px',
  },
}

export const Children: Story = {
  args: {
    checkboxGenre: 'product',
    checkboxGenreType: 'secondary',
    checkBoxView: 'circle',
    size: 'large',
    value: [{ value: 0, children: 'First' }],
    options: [
      { value: 0, children: 'First' },
      { value: 1, children: 'Second' },
      { value: 3, label: 'Thirst', children: '<LibraryIcon.Support />' },
    ],
    labelField: 'label',
    valueField: 'value',
    childrenField: 'children',
    multiple: true,
    width: '100%',
    checkboxIsHiddenBorder: true,
  },
}
