import Header from '../header';
import './room-list-item.scss';

// Single element of the room list
export default function RoomListItem() {
  return (
    <div className='room-list-item'>
      <Header text='A Meeting For Everyone' size='tiny' align='left' gridArea='room-list-item-header' />
      <div className='room-list-item-active'>People: 3/5</div>
      <div className='room-list-item-owner'>ZZ</div>
    </div>
  );
};
