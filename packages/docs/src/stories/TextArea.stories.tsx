import { Box, Text, TextArea, TextAreaProps } from '@tcc/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observações</Text>
          {Story()}
        </Box>
      )
    },
  ],

  argTypes: {
    variant: {
      options: ['salmon', 'blue', 'green', 'yellow', 'purple'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Adicione quaisquer observações...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
