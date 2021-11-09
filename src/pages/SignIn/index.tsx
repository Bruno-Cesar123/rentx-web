import { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

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
  const { signIn, user } = useContext(AuthContext);

  console.log(user);


  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(validationSchema)
  });
  
  const onSubmitForm = useCallback((data: SignInFormData) => {
    try {

      signIn({
        email: data.email,
        password: data.password,
      });

      toast.success('Login realizado com sucesso');

    } catch (err) {
      toast.error('Não foi possível realizar o login');
    }
  }, [signIn]);

  return (
    <Container>
      <img src={logoImg} alt="logo" />

      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <h1>Faça seu login</h1>

        <Input
          inputError={Boolean(errors.email)}
          label="E-mail"
          id="email"
          aria-describedby="E-mail"
          register={register}      
        />
        <p>{errors.email?.message}</p>

        <Input
          inputError={Boolean(errors.password)}
          label="Senha"
          id="password"
          aria-describedby="Senha"
          type="password"
          register={register}
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