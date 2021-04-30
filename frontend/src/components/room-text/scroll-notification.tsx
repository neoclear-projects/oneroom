import './scroll-notification.scss';

export default function ScrollNotification({
  visible,
  onClick
}: {
  visible: boolean,
  onClick: () => void
}) {
  return (
    <div
      className={visible ? 'scroll-notification' : 'scroll-notification-hide'}
      onClick={onClick}
    >
      Go to latest messages
    </div>
  );
};
