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


        </form>
      </Content>
    </Container>
  )
}