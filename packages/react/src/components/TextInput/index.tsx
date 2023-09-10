import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  variant: any
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, variant = 'green', ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer variant={variant}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
