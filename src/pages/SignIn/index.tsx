import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';

export function SignIn() {
  return (
    <Container>
      <img src={logoImg} alt="rentx" />

      <Form>
        <h1>Faça seu login</h1>

        <Input
          label="E-mail"
          id="email"
          type="text"
          name="email"
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
        />

        <div>
          <a href="/">Esqueceu a senha?</a>
          <Link to="/signup">Crie sua conta</Link>
        </div>

        <button type="submit">Entrar</button>

      </Form>
    </Container>
  )
}