import { useHistory } from 'react-router';
import { LOGIN_URL } from '../../routes';
import Button from '../button';
import Header from '../header';
import Input from '../input';
import PageCenter from '../page-center';
import './register.scss';

export default function Register() {
  const history = useHistory();

  return (
    <PageCenter
      child={
        <div id='register'>
          <Header
            text='Register'
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
          <Input
            placeholder='confirm password'
            onChange={() => {}}
            type='password'
            gridArea='confirm-password'
          />
          <Input
            placeholder='invitation code'
            onChange={() => {}}
            type='text'
            gridArea='code'
          />
          <Button
            text='Register'
            onClick={() => {}}
            gridArea='register'
            inverted={true}
          />
          <Button
            text='Login'
            onClick={() => history.push(LOGIN_URL)}
            gridArea='login'
          />
        </div>
      }
    />
  );
}
