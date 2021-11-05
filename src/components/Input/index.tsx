import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  label: string;
}

export function Input({ id, name, type, label }: InputProps) {
  return (
    <Container>
      <input
        id={id}
        name={name} 
        type={type}
        placeholder="*"
      />
      <label htmlFor={label}>{label}</label>
    </Container>
  )
}