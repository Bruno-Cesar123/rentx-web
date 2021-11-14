import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';
import { api } from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const validationSchema = yup.object({
  password: yup.string()
    .required('* Senha obrigatória')
    .min(6, '* No mínimo 6 dígitos').trim(),
  password_confirmation: yup.string().oneOf(
    [yup.ref('password'), undefined],
    'Confirmação incorreta',
  ),
});

export function ResetPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(validationSchema)
  });

  const history = useHistory();

  const onSubmitForm = useCallback(async (data: ResetPasswordFormData) => {
    try {
      await api.post('/password/reset', {
        password: data.password,
        password_confirmation: data.password_confirmation,
      });

      history.push('/signin');
      toast.success('Senha alterada com sucesso');
    } catch(err) {
      toast.success('Não foi possível alterar sua senha, tente novamente');
    }
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="logo" />

      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <h1>Resetar senha</h1>

        <Input
          inputError={Boolean(errors.password)}
          label="Digite sua nova senha"
          id="password"
          type="password"
          aria-describedby="Senha"
          register={register}      
        />
        <p>{errors.password?.message}</p>

        <Input
          inputError={Boolean(errors.password_confirmation)}
          label="Confirme uma nova senha"
          type="password"
          id="password_confirmation"
          aria-describedby="Senha"
          register={register}      
        />
        <p>{errors.password_confirmation?.message}</p>

        <button type="submit">Confirmar</button>
      </Form>
    </Container>
  )
}