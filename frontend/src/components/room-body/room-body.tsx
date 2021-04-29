import RoomAudio from '../room-audio';
import RoomText from '../room-text';
import './room-body.scss';

export default function RoomBody() {
  return (
    <div id='room-body'>
      <RoomAudio />
      <RoomText />
    </div>
  );
};
