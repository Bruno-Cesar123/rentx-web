import { Link } from 'react-router-dom';
import { Container, Content, Header } from './styles';

import logoImg from '../../assets/logo.svg';

export function Landing() {
  return (
    <Container>
      <Content>
        <Header>
          <img src={logoImg} alt="rentex" />
          <Link to="/signin">Entrar</Link>
        </Header>

        <div>
          <h1>Alugue carros de forma prática e rápida.</h1>

          <Link to="/signin">
            Começar agora
          </Link>
        </div>
      </Content>
    </Container>
  )
}