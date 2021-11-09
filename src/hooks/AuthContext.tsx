import { createContext, ReactNode, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

interface AuthState {
  token: string;
  refresh_token: string;
  user: Object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: Object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
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

    setData({ token, refresh_token, user });

    console.log(response.data);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Rentx:token');
    localStorage.removeItem('@Rentx:refresh_token');
    localStorage.removeItem('@Rentx:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
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

