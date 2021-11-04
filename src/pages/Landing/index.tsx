import { Container, Content, Header } from './styles';

import logoImg from '../../assets/logo.svg';

export function Landing() {
  return (
    <Container>
      <Content>
        <Header>
          <img src={logoImg} alt="rentex" />
        </Header>

        <div>
          <h1>Alugue carros de forma prática e rápida.</h1>

          <a href="/">
            Começar agora
          </a>
        </div>
      </Content>
    </Container>
  )
}