import { useState } from 'react';
import ChatHistory from './chat-history';
import './room-text.scss';
import TextBox from './text-box';

export default function RoomText() {
  const [hist, setHist] = useState<Array<{ id: string, message: string }>>([]);

  return (
    <div id='room-text'>
      <div style={{ gridArea: 'head', borderBottom: '3px black solid', textAlign: 'center', fontSize: 24 }}>asd</div>
      <ChatHistory history={hist} />
      <TextBox onSubmit={text => {
        let newArray = [...hist];
        newArray.push({
          id: 'TC',
          message: text
        });
        setHist(newArray);
      }} />
    </div>
  );
};
