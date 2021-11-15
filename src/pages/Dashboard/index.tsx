import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Header } from "./styles";

export function Dashboard() {

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="rentex" />
        <h4>Config</h4>
      </Header>
    </Container>
  ) 
}