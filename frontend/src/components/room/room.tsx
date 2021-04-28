import RoomList from '../room-list';
import './room.scss';

export default function Room() {
  return (
    <div id='room-room'>
      <RoomList />
      <div style={{ gridArea: 'room-content' }}>Content</div>
    </div>
  );
};
