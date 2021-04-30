import { useEffect, useRef, useState } from 'react';
import ChatEntry from '../chat-entry';
import './chat-history.scss';
import ScrollNotification from './scroll-notification';

const SCROLL_DIFF = 200;

// Compute whether the div element is at bottom
function atBottom(element: HTMLDivElement | null): boolean {
  // If element is null, assume it is at bottom
  if (element === null)
    return true;
  const top = element.scrollTop;
  const height = element.clientHeight;
  const scrollHeight = element.scrollHeight;

  return scrollHeight - (top + height) < SCROLL_DIFF;
}

export default function ChatHistory({
  history
}: {
  history: Array<{ id: string, message: string }>
}) {
  // Reference to the scroll component
  const histRef = useRef<HTMLDivElement>(null);

  // Obtain three states to calculate whether page is at bottom
  const [isAtBottom, setIsAtBottom] = useState(true);

  // Function to compute at bottom state, and set state accordingly
  const computeBot = () => {
    // Update state on scroll
    setIsAtBottom(atBottom(histRef.current));
  };

  // Function to move to the end
  const goToScrollEnd = () => {
    if (histRef.current) {
      histRef.current.scrollTop = histRef.current.scrollHeight - histRef.current.clientHeight;
    }
  };

  // Scroll to the end if after history changes, it is still at the end
  useEffect(() => {
    if (atBottom(histRef.current))
      goToScrollEnd();
    computeBot();
  }, [history]);

  return (
    <div className='chat-history-wrapper'>
      <div
        className='chat-history'
        ref={histRef}
        onScroll={() => {
          computeBot();
        }}
      >
        {
          history.map(e => <ChatEntry id={e.id} message={e.message} me={true} />)
        }
      </div>
      <ScrollNotification visible={!isAtBottom} onClick={goToScrollEnd} />
    </div>
  );
};
