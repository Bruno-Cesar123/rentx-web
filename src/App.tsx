import CreateGlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

import { Routes } from './routes';

import 'react-toastify/dist/ReactToastify.min.css';

export function App() {
  return (
    <>
      <Routes />
      <CreateGlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  )
}
