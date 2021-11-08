import { InputHTMLAttributes } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { Container } from './styles';

interface ITeste {
  email: string;
  password: string; 
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: Path<ITeste>;
  register: UseFormRegister<ITeste>;
}

export function Input({ label, id, register,...rest }: InputProps) {
  return (
    <Container>
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

