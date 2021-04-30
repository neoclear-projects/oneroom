import { useEffect, useRef, useState } from 'react';
import ChatEntry from '../chat-entry';
import './room-text.scss';
import ScrollNotification from './scroll-notification';
import TextBox from './text-box';
import './chat-history.scss';

const SCROLL_DIFF = 80;

function atBottom(top: number, height: number, scrollHeight: number): boolean {
  return scrollHeight - (top + height) < SCROLL_DIFF;
}

export default function RoomText() {
  const [hist, setHist] = useState<Array<{ id: string, message: string }>>([]);

  // Reference to the scroll component
  const histRef = useRef<HTMLDivElement>(null);

  // Obtain three states to calculate whether page is at bottom
  const [atBot, setAtBot] = useState(true);

  // Function to compute at bottom state, and set state accordingly
  const computeBot = () => {
    if (histRef.current) {
      // Update state on scroll
      setAtBot(atBottom(histRef.current.scrollTop, histRef.current.clientHeight, histRef.current.scrollHeight));
    }
  };

  // Function to move to the end
  const goToScrollEnd = () => {
    if (histRef.current) {
      histRef.current.scrollTop = histRef.current.scrollHeight - histRef.current.clientHeight;
    }
  };

  useEffect(() => {
    if (atBot) {
      goToScrollEnd();
    }
  }, []);

  return (
    <div id='room-text'>
      <div style={{ gridArea: 'head', borderBottom: '3px black solid', textAlign: 'center', fontSize: 24 }}>asd</div>
      <div className='chat-history-wrapper'>
        <div
          className='chat-history'
          ref={histRef}
          onScroll={computeBot}
        >
          {
            hist.map(e => <ChatEntry id={e.id} message={e.message} me={true} />)
          }
        </div>
        <ScrollNotification
          visible={!atBot}
          onClick={goToScrollEnd}
        />
      </div>
      <TextBox onSubmit={text => {
        let newArray = [...hist];
        newArray.push({
          id: 'TC',
          message: text
        });
        setHist(newArray);

        // Need to compute bot because might change
        computeBot();
        // if (atBot) {
        //   goToScrollEnd();
        // }
      }} />
    </div>
  );
};
