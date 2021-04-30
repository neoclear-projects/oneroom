import { useRef } from 'react';
import './text-box.scss';

export default function TextBox({
  onSubmit
}: {
  onSubmit: (text: string) => void
}) {
  const textRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div id='room-text-box'>
      <textarea
        id='text-area'
        placeholder='Chat here'
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            if (textRef.current !== null) {
              onSubmit(textRef.current.value);
              textRef.current.value = '';
            }
            e.preventDefault();
          }
        }}
        ref={textRef}
      />
    </div>
  )
};
