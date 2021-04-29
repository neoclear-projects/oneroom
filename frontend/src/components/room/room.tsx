import PageSplit from '../page-split';
import RoomBody from '../room-body';
import RoomList from '../room-list';

export default function Room() {
  return (
    <PageSplit
      leftChild={<RoomList />}
      rightChild={<RoomBody />}
    />
  );
};
