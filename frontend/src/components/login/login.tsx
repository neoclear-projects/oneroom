import { useHistory } from 'react-router';
import { REGISTER_URL } from '../../routes';
import Button from '../button';
import Header from '../header';
import Input from '../input';
import PageCenter from '../page-center';
import './login.scss';

/**
 * Login component
 * 
 * @returns Login component
 */
export default function Login() {
  const history = useHistory();

  return (
    // Use a page center wrapper to contain a component in the center of the page
    <PageCenter
      child={
        <div id='login'>
          <Header
            text='One Room'
            size='big'
            gridArea='header'
          />
          <Input
            placeholder='username'
            onChange={() => {}}
            gridArea='username'
          />
          <Input
            placeholder='password'
            onChange={() => {}}
            type='password'
            gridArea='password'
          />
          <Button
            text='Login'
            onClick={() => {}}
            gridArea='login'
            inverted={true}
          />
          <Button
            text='Register'
            onClick={() => history.push(REGISTER_URL)}
            gridArea='register'
          />
        </div>
      }
    />
  );
}
