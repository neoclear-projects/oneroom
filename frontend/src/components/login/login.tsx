import Button from '../button';
import Header from '../header';
import Input from '../input';
import PageCenter from '../page-center';
import './login.scss';

export default function Login() {
  return (
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
          <Button text='Login' onClick={() => {}} gridArea='login' inverted={true} />
          <Button text='Register' onClick={() => {}} gridArea='register' />
        </div>
      }
    />
  );
}
