import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import { Landing } from '../pages/Landing';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Router>
    </BrowserRouter>
  )
}