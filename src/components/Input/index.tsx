import { InputHTMLAttributes } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { Container } from './styles';

interface IFormValues {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
  driver_license: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  inputError?: boolean;
}

export function Input({ label, id, register, inputError, ...rest }: InputProps) {
  return (
    <Container invalid={!!inputError}>
      <input
        placeholder="*"
        id={id}
        {...register(id)}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </Container>
  )
}

