import * as Checkbox from '@radix-ui/react-checkbox'

import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$green300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $green300',
  },

  variants: {
    variant: {
      salmon: {
        '&[data-state="checked"]': {
          backgroundColor: '$salmon500',
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $salmon500',
        },
      },

      green: {
        '&[data-state="checked"]': {
          backgroundColor: '$green500',
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $green500',
        },
      },

      blue: {
        '&[data-state="checked"]': {
          backgroundColor: '$blue500',
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $blue500',
        },
      },

      purple: {
        '&[data-state="checked"]': {
          backgroundColor: '$purple500',
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $purple500',
        },
      },

      yellow: {
        '&[data-state="checked"]': {
          backgroundColor: '$yellow500',
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $yellow500',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'green',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
