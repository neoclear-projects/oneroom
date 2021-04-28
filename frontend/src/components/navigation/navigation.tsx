import { useState } from 'react';
import NavigateItem from './navigate-item';
import './navigation.scss';

export default function Navigation() {
  const [tab, setTab] = useState('Rooms');

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
          focused={tab === 'Rooms'}
          onClick={() => setTab('Rooms')}
        />
        <NavigateItem
          name='Manage'
          link='/manage'
          focused={tab === 'Manage'}
          onClick={() => setTab('Manage')}
        />
        <NavigateItem
          name='Invitations'
          link='/invitations'
          focused={tab === 'Invitations'}
          onClick={() => setTab('Invitations')}
        />
      </div>
    </div>
  );
};
