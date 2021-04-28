import PageSplit from '../page-split';
import RoomList from '../room-list';

export default function Room() {
  return (
    <PageSplit
      leftChild={<RoomList />}
      rightChild={<div style={{ padding: '32px' }}>What the fuck</div>}
    />
  );
};
