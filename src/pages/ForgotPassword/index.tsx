import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const validationSchema = yup.object({
  email: yup.string()
    .email('* Digite um email válido')
    .required('* E-mail obrigatório').trim(),
});

export function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmitForm = useCallback((data: ForgotPasswordFormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="logo" />

      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <h1>Solicitar troca de senha</h1>

        <Input
          inputError={Boolean(errors.email)}
          label="E-mail"
          id="email"
          aria-describedby="E-mail"
          register={register}      
        />
        <p>{errors.email?.message}</p>

        <button type="submit">Enviar</button>
        <Link to="/signin"> <FiArrowLeft size={18} /> <span>Retornar ao login</span></Link>
      </Form>


    </Container>
  )
}