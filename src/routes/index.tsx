import { Switch } from 'react-router-dom';
import { Landing } from '../pages/Landing';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ResetPassword } from '../pages/ResetPassword';
import { Profile } from '../pages/Profile';
import { Route } from './Route';

export function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/dashboard' component={Dashboard} isPrivate />
      <Route path='/profile' component={Profile} isPrivate />
    </Switch>
  )
}