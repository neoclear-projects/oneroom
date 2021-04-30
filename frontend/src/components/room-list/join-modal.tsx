import { useState } from "react";
import Button from "../button";
import Header from "../header";
import Input from "../input";
import Label from "../label";
import Modal from "../modal";
import './join-modal.scss';

function JoinHeader() {
  return (
    <Header text='Join Room' align='left' />
  );
}

function JoinBody({
  onChange
}: {
  onChange: (text: string) => void
}) {
  return (
    <div className='join-body'>
      <Label
        text='Room Code: '
        gridArea='label'
      />
      <Input
        placeholder='room code'
        onChange={onChange}
        gridArea='text'
      />
    </div>
  );
}

function JoinEnding({
  onAccept,
  onCancel
}: {
  onAccept: () => void,
  onCancel: () => void
}) {
  return (
    <div className='join-ending'>
      <Button
        text='Join'
        onClick={onAccept}
        inverted={true}
        gridArea='join'
      />
      <Button
        text='Cancel'
        onClick={onCancel}
        gridArea='cancel'
      />
    </div>
  );
}

// The join modal component that encapsulates the modal component
// Combine modal UI and join logic into one component
export default function JoinModal({
  show,
  onClose
}: {
  show: boolean,
  onClose: () => void
}) {
  const [roomCode, setRoomCode] = useState('');

  return (
    <Modal
      show={show}
      header={<JoinHeader />}
      body={<JoinBody onChange={setRoomCode} />}
      ending={
        <JoinEnding
          onAccept={() => console.log(roomCode)}
          onCancel={onClose}
        />
      }
      width='tiny'
      onClose={onClose}
    />
  );
}
