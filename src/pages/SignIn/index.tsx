import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string()
    .email('* Digite um email válido')
    .required('* E-mail obrigatório').trim(),
  password: yup.string()
    .required('* Senha obrigatória')
    .min(6, '* No mínimo 6 dígitos').trim(),
});

export function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(validationSchema)
  });
  
  const onSubmitForm = useCallback((data: SignInFormData) => {
    console.log(data)
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="logo" />

      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <h1>Faça seu login</h1>

        <Input
          label="E-mail"
          id="email"
          type="text"
          aria-describedby="E-mail"
          register={register}
          className={errors.email?.message ? 'input-error' : ''}        
        />
        <p>{errors.email?.message}</p>

        <Input
          label="Senha"
          id="password"
          aria-describedby="Senha"
          type="password"
          register={register}
          className={errors.password?.message ? 'input-error' : ''}
        />
        <p>{errors.password?.message}</p>

        <div>
          <Link to="/">Esqueceu a senha?</Link>
          <Link to="/signup">Crie sua conta</Link>
        </div>

        <button type="submit">Entrar</button>

      </Form>
    </Container>
  )
}