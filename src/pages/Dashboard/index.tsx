
import logoImg from '../../assets/logo.svg';
import carImg from '../../assets/landing.png';

import { Container, Header, Content, Card, CardSection } from "./styles";

export function Dashboard() {

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="rentex" />
        <h4>Config</h4>
      </Header>
      <Content>
        <h2>Seus carros alugados</h2>

        <CardSection>
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

          <main>
            <div>
              <h3>Informações gerais</h3>

              <section>
                <p>Data de início: <span>15/11/2021</span></p>
                <p>Data do Fim: <span>15/11/2021</span></p>
                <p>Retorno previsto: <span>15/11/2021</span></p>
                <p>Total: <span>R$ 500,00</span></p>
              </section>
            </div>
            <div>
              <h3>Informações do carro</h3>

              <section>
                <p>Nome: <span>AUDI A4</span></p>
                <p>Marca: <span>AUDI</span></p>
                <p>Descrição: <span>carro de luxo, 4 lugares</span></p>
                <p>Valor diário: <span>R$ 50,00</span></p>
                <p>Multa diária: <span>R$ 80,00</span></p>
                <p>Licença: <span>ABCD-1234</span></p>
              </section>
            </div>
          </main>
        </CardSection>
      </Content>
    </Container>
  )
}