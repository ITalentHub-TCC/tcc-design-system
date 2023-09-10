import { Box, Text, TextInput, TextInputProps } from '@fatec-tcc/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},

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
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Endereço de E-mail</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Escreva seu e-mail',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'seu-usuário',
  },
}
