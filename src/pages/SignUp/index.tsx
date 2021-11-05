import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';

export function SignUp() {
  return (
    <Container>
      <img src={logoImg} alt="rentx" />

      <Form>
        <h1>Faça seu cadastro</h1>

        <Input
          label="Nome"
          id="name"
          name="name"
        />

        <Input
          label="Licença do carro"
          id="driver_license"
          name="driver_license"
        />

        <Input
          label="E-mail"
          id="email"
          name="email"
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
        />

        <button type="submit">Cadastrar</button>
        <Link to="/signin">Retornar ao login</Link>

      </Form>
    </Container>
  )
}