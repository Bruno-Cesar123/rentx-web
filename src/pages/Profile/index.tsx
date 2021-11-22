import { useCallback,ChangeEvent } from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';

import { Container, Header, Content, AvatarInput } from './styles';

export function Profile() {
  const { updateUser, user } = useAuth();


  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then((response) => {
          updateUser(response.data);
          console.log(response.data);

          toast.success('Avatar alterado com sucesso');
        });
      }
    },
    [updateUser]
  );

  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <FiArrowLeft size={32} />
        </Link>
      </Header>
      <Content>
        <form>
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" readOnly value={user.name} />

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" readOnly value={user.email} />

          <label htmlFor="driver_license">Licença:</label>
          <input type="text" id="driver_license" readOnly value={user.driver_license} />


        </form>
      </Content>
    </Container>
  )
}