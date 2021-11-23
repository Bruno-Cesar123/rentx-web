import { useEffect, useState } from 'react';
import logoImg from '../../assets/logo.svg';

import { Container, Header, Content } from "./styles";
import { ProfileMenu } from '../../components/ProfileMenu';
import { api } from '../../services/api';

interface RentalsUser {
  id: string;
  start_date: string;
  end_date: string;
  expected_return_date: string;
  total: string;
  car: {
    id: string;
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
  }
}

export function Dashboard() {
  const [ rentalsUser, setRentalsUser ] = useState<RentalsUser[]>([]);

  useEffect(() => {
    api.get('/rentals/user').then(response => {
      setRentalsUser(response.data);
    })
  }, []);

  console.log(rentalsUser);

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="rentex" />
        <ProfileMenu />
      </Header>
      <Content>
        <h2>Seus carros alugados</h2>

          {rentalsUser.map((rentalUser) => {
            return (
              <div key={rentalUser.id}>
              <main>
                <h3>Informações do carro</h3>
                <p>Nome: <span>{rentalUser.car.name}</span></p>
                <p>Marca: <span>{rentalUser.car.brand}</span></p>
                <p>Descrição: <span>{rentalUser.car.description}</span></p>
                <p>Diária: <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(rentalUser.car.daily_rate)}
                </span></p>
                <p>Multa: <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(rentalUser.car.fine_amount)}  
                </span></p>
              </main>
              <main>
                <h3>Informações do Gerais</h3>
                <p>Data de início: <span>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(rentalUser.start_date)
                )}  
                </span></p>
                <p>Data de Fim: <span>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(rentalUser.end_date)
                )}  
                </span></p>
                <p>Total: <span>{rentalUser.total}</span></p>
              </main>
            </div>
            )
          })}
      </Content>
    </Container>
  )
}