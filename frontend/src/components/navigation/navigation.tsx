import { useState } from 'react';
import NavigateItem from './navigate-item';
import './navigation.scss';

export default function Navigation({
  path
}: {
  path: string
}) {
  const [tab, setTab] = useState(path);

  return (
    <div
      id='navigation'
    >
      <div
        id='navigation-wrapper'
      >
        <NavigateItem
          name='Rooms'
          link='/'
          focused={tab === '/'}
          onClick={() => setTab('/')}
        />
        <NavigateItem
          name='Manage'
          link='/manage'
          focused={tab === '/manage'}
          onClick={() => setTab('/manage')}
        />
        <NavigateItem
          name='Invitations'
          link='/invitations'
          focused={tab === '/invitations'}
          onClick={() => setTab('/invitations')}
        />
      </div>
    </div>
  );
};
