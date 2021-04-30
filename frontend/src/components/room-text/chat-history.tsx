import { useEffect, useRef, useState } from 'react';
import Button from '../button';
import ChatEntry from '../chat-entry';
import './chat-history.scss';
import ScrollNotification from './scroll-notification';

export default function ChatHistory({
  history
}: {
  history: Array<{ id: string, message: string }>
}) {
  // Reference to the scroll component
  const histRef = useRef<HTMLDivElement>(null);

  // Obtain three states to calculate whether page is at bottom
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div className='chat-history-wrapper'>
      <div
        className='chat-history'
        ref={histRef}
        onScroll={() => {
          if (histRef.current) {
            
            // Update state on scroll
            setScrollPos(histRef.current.scrollTop);
            setScrollHeight(histRef.current.scrollHeight);
            setHeight(histRef.current.clientHeight);
          }
        }}
      >
        {
          history.map(e => <ChatEntry id={e.id} message={e.message} me={true} />)
        }
      </div>
      {/* <ScrollNotification visible={!atBottom(scrollPos, height, scrollHeight)} /> */}
    </div>
  );
};
