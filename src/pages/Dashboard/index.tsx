import logoImg from '../../assets/logo.svg';
import carImg from '../../assets/landing.png';

import { Container, Header, Content } from "./styles";
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

        <div>
          <h2>AUDI</h2>
        </div>
      </Content>
    </Container>
  )
}