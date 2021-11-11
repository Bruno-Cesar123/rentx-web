import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';
import { api } from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const validationSchema = yup.object({
  email: yup.string()
    .email('* Digite um email válido')
    .required('* E-mail obrigatório').trim(),
});

export function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmitForm = useCallback(async (data: ForgotPasswordFormData) => {
    try {
      setLoading(true);

      await api.post('/password/forgot', {
        email: data.email,
      });

      history.push('/signin');

      toast.success('Enviamos um e-mail para recuperação de senha');

    } catch (err) {
      toast.success('Ocorreu um erro ao envial o email, tente novamente');
    } finally {
      setLoading(false);
    }
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

        <button type="submit">
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        <Link to="/signin"> <FiArrowLeft size={18} /> <span>Retornar ao login</span></Link>
      </Form>


    </Container>
  )
}