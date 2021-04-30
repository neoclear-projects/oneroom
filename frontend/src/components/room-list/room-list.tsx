import { useState } from 'react';
import Button from '../button';
import RoomListItem from '../room-list-item';
import JoinModal from './join-modal';
import './room-list.scss';

export default function RoomList() {
  const [joinVisible, setJoinVisible] = useState(false);

  return (
    <div className='room-list'>
      <JoinModal
        show={joinVisible}
        onClose={() => setJoinVisible(false)}
      />

      <div className='room-list-btn'>
        <Button
          text='Join'
          onClick={() => setJoinVisible(!joinVisible)}
          inverted={true}
          shadowed={true}
        />
      </div>
      <RoomListItem />
      <RoomListItem />
      <RoomListItem />
      <RoomListItem />
      <RoomListItem />
      <RoomListItem />
      <RoomListItem />
      <RoomListItem />
      <RoomListItem />
    </div>
  );
};
