import Button from '../button';
import RoomListItem from '../room-list-item';
import './room-list.scss';

export default function RoomList() {
  return (
    <div className='room-list'>
      <div className='room-list-btn'>
        <Button
          text='Join'
          onClick={() => {}}
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
      <RoomListItem />
    </div>
  );
};
