import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    variant: {
      salmon: {
        '&:has(input:focus)': {
          borderColor: '$salmon300',
        },
      },

      blue: {
        '&:has(input:focus)': {
          borderColor: '$blue300',
        },
      },

      purple: {
        '&:has(input:focus)': {
          borderColor: '$purple300',
        },
      },

      yellow: {
        '&:has(input:focus)': {
          borderColor: '$yellow300',
        },
      },

      green: {
        '&:has(input:focus)': {
          borderColor: '$green300',
        },
      },
    },

    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    variant: 'green',
    size: 'md',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
