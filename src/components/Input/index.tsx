import { InputHTMLAttributes, Ref } from 'react'

import { Container } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  optionalText?: string | null
  ref?: Ref<HTMLInputElement> | null
}

export function Input({ name, optionalText, ref, ...rest }: IInputProps) {
  return (
    <Container>
      <input {...rest} ref={ref} />
      <span>{optionalText}</span>
    </Container>
  )
}
