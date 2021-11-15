import { useEffect } from 'react';
import { useAuth } from "../../hooks/AuthContext";
import { api } from '../../services/api';
import { Container } from "./styles";


export function Dashboard() {
  const { user, refreshToken } = useAuth();

  useEffect(() => {
    api.get('/rentals/user')
      .then(response => {
        console.log(response.data);
      })
  }, []);

  console.log(user);
  
  return (
    <Container>
      <marquee>
        <h1>dashboard</h1>
      </marquee>
    </Container>
  ) 
}