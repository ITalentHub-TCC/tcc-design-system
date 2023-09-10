import { Box, Checkbox, CheckboxProps, Text } from '@fatec-tcc/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    variant: 'green',
  },
  argTypes: {
    variant: {
      options: ['salmon', 'blue', 'green', 'yellow', 'purple'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
