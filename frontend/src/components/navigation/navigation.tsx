import { useState } from 'react';
import NavigateItem from './navigate-item';
import './navigation.scss';

// Navigation component
export default function Navigation({
  path
}: {
  path: string
}) {
  // Current tab
  // Path is the initial tab should be focused
  const [tab, setTab] = useState(path);

  // Three navigation items
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
