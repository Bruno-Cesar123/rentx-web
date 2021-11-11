import { 
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps 
} from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export function Route({ isPrivate = false, component: Component, ...rest }: RouteProps) {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/signin' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}