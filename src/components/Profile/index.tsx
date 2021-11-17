import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLogOut, FiSettings } from 'react-icons/fi';

import { useAuth } from '../../hooks/AuthContext';
import { Profile, ContentMenu, Menu } from './styles';

export function ProfileMenu() {
  const { user, signOut } = useAuth();
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <Menu>
      <Profile onClick={() => setOpenMenu(!openMenu)}>
        <img src="https://github.com/Bruno-Cesar123.png" alt={user.name} />
      </Profile>
      {openMenu && (
        <ContentMenu>
          <h3>
            {user.name}
            <br />
          </h3>
          <ul>
            <li>
              <FiUser />
              <Link to="/profile">Meu perfil</Link>
            </li>
            <li>
              <FiLogOut />
              <Link to="/" onClick={signOut}>
                Logout
              </Link>
            </li>
            <li>
              <FiSettings />
              <Link to="/" >
                Admin
              </Link>
            </li>
          </ul>
        </ContentMenu>
      )}
    </Menu>
  )
}