import { useCallback } from 'react';
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

interface SignUpFormData {
  name: string;
  email: string;
  driver_license: string;
  password: string;
}

const validationSchema = yup.object({
  name: yup.string().required('* Nome obrigatório').trim(),
  driver_license: yup.string().required('* Licença obrigatória').trim(),
  email: yup.string()
    .email('* Digite um email válido')
    .required('* E-mail obrigatório').trim(),
  password: yup.string()
    .required('* Senha obrigatória')
    .min(6, '* No mínimo 6 dígitos').trim(),
});

export function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema)
  });

  const history = useHistory();

  const onSubmitForm = useCallback( async (data: SignUpFormData) => {
    try {

      await api.post('/users', data);

      toast.success('Cadastro realizado com sucesso');

      history.push('/signin');
    } catch (err) {
      toast.error('Não foi possível realizar o cadastro');
    }
  }, [history]);

  return (
    <Container>
      <img src={logoImg} alt="rentx" />

      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <h1>Faça seu cadastro</h1>

        <Input
          inputError={Boolean(errors.name)}
          label="Nome"
          id="name"
          aria-describedby="Nome"
          register={register} 
        />
        <p>{errors.name?.message}</p>

        <Input
          inputError={Boolean(errors.driver_license)}
          label="Licença de Motorista"
          id="driver_license"
          aria-describedby="Licença do motorista"
          register={register}
        />
        <p>{errors.driver_license?.message}</p>

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

        <button type="submit">Cadastrar</button>
        <Link to="/signin"> <FiArrowLeft size={18} /> <span>Retornar ao login</span></Link>

      </Form>
    </Container>
  )
}