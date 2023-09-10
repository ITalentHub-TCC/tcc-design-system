import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      salmon: {
        color: '$white',
        background: '$salmon500',
        '&:not(:disabled):hover': {
          background: '$salmon300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      blue: {
        color: '$white',
        background: '$blue500',
        '&:not(:disabled):hover': {
          background: '$blue300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      purple: {
        color: '$white',
        background: '$purple500',
        '&:not(:disabled):hover': {
          background: '$purple300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      yellow: {
        color: '$black',
        background: '$yellow500',
        '&:not(:disabled):hover': {
          background: '$yellow300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      green: {
        color: '$white',
        background: '$green500',

        '&:not(:disabled):hover': {
          background: '$green300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'green',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
