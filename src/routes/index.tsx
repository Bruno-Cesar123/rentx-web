import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import { Landing } from '../pages/Landing';
import { SignIn } from '../pages/SignIn';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<SignIn />} />
      </Router>
    </BrowserRouter>
  )
}