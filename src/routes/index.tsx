import { Switch } from 'react-router-dom';
import { Landing } from '../pages/Landing';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Route } from './Route';

export function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/dashboard' component={Dashboard} isPrivate />
    </Switch>
  )
}