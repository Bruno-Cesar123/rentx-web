
import { Container, Form } from './styles';
import logoImg from '../../assets/logo.svg';

export function SignIn() {
  return (
    <Container>
      <img src={logoImg} alt="rentx" />

      <Form>
        <h1>Sign In</h1>

        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          name="email"
          aria-label='email'
          id='email'
          autoFocus
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          aria-label='password'
          id='password'
        />

        <div>
          <a href="/">Esqueceu a senha?</a>
          <a href="/">Crie sua conta</a>
        </div>

        <button type="submit">Entrar</button>

      </Form>
    </Container>
  )
}