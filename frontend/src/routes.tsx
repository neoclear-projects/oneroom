import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';

// URL definitions
export const HOME_URL = '/';
export const LOGIN_URL = '/login';
export const REGISTER_URL = '/register';

/**
 * Routing definitions for the entire application
 * 
 * @returns The routings for the application. It is used as the root of the app
 */
export default function Routes() {
  return (
    <Switch>
      <Route exact path={LOGIN_URL} component={Login} />
      <Route exact path={REGISTER_URL} component={Register} />
      <Route exact path={HOME_URL} component={Home} />
    </Switch>
  );
}
