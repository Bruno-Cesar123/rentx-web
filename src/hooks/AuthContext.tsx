import { createContext, ReactNode, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  driver_license: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  refresh_token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  token: string;
  refresh_token: string;
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  refreshToken(): void;
  updateUser(user: User): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Rentx:token');
    const refresh_token = localStorage.getItem('@Rentx:refresh_token');
    const user = localStorage.getItem('@Rentx:user');

    if (token && refresh_token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { token, refresh_token, user: JSON.parse(user) }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, refresh_token,  user } = response.data;

    localStorage.setItem('@Rentx:token', token);
    localStorage.setItem('@Rentx:refresh_token', refresh_token);
    localStorage.setItem('@Rentx:user', JSON.stringify(user));

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ token, refresh_token, user });
  }, []);

  

  const refreshToken = useCallback(async () => {
    const refresh_token_old = localStorage.getItem('@Rentx:refresh_token');

    const response = await api.post('/refresh-token', {
      refresh_token: refresh_token_old,
    });

    const { refresh_token, token } = response.data;

    localStorage.setItem('@Rentx:token', token);
    localStorage.setItem('@Rentx:refresh_token', refresh_token);

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Rentx:token');
    localStorage.removeItem('@Rentx:refresh_token');
    localStorage.removeItem('@Rentx:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@Rentx:user', JSON.stringify(user));
      
      setData({
        token: data.token,
        refresh_token: data.refresh_token,
        user,
      });
    },
    [setData, data.token, data.refresh_token]
  );

  return (
    <AuthContext.Provider value={{
      token: data.token,
      refresh_token: data.refresh_token,
      user: data.user,
      signIn, 
      signOut, 
      refreshToken, 
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context;
}

