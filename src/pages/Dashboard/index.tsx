import { useAuth } from "../../hooks/AuthContext";
import { Container } from "./styles";


export function Dashboard() {
  const { user } = useAuth();

  console.log(user);
  
  return (
    <Container>
      <marquee>
        <h1>dashboard</h1>
      </marquee>
    </Container>
  ) 
}