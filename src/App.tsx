import { ToastContainer } from 'react-toastify';

import { Routes } from './routes';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.min.css';

import { AuthProvider } from './hooks/AuthContext';


export function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  )
}
