import Label from '../label';
import Avatar from './avatar';
import './chat-entry.scss';

export default function ChatEntry({
  id,
  message,
  me = false
}: {
  id: string,
  message: string,
  me?: boolean
}) {
  return (
    <div className={me ? 'chat-entry-me' : 'chat-entry'}>
      <Avatar id={id} />
      <div className={me ? 'message-wrap-me' : 'message-wrap'}>
        <Label
          text={message}
          bordered={true}
        />
      </div>
    </div>
  )
};
