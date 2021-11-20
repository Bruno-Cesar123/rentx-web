import logoImg from '../../assets/logo.svg';
import carImg from '../../assets/landing.png';

import { Container, Header, Content, Card, CardSection } from "./styles";
import { ProfileMenu } from '../../components/ProfileMenu';

export function Dashboard() {

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="rentex" />
        <ProfileMenu />
      </Header>
      <Content>
        <h2>Seus carros alugados</h2>

        <CardSection>
          <Card>
            <img src={carImg} alt="car" />
            <h3>Audi A4</h3>
            <p>Nome: <span> nome do carro </span></p>
            <p>Descrição: <span> descrição do carro </span></p>

            <a href="/">
              Mais informações...
            </a>
          </Card>
          <Card>
            <img src={carImg} alt="car" />
            <h3>Audi A4</h3>
            <p>
              description of the car
            </p>

            <a href="/">
              Mais informações...
            </a>
          </Card>
          <Card>
            <img src={carImg} alt="car" />
            <h3>Audi A4</h3>
            
            <p>
              description of the car
            </p>

            <a href="/">
              Mais informações...
            </a>
          </Card>
        </CardSection>
      </Content>
    </Container>
  )
}