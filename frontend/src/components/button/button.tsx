import './button.scss';

export default function Button({
  text,
  onClick,
  gridArea = undefined
}: {
  text: string
  onClick: () => void,
  gridArea?: string | undefined
}) {
  return (
    <button
      className='room-button'
      onClick={onClick}
      style={{ gridArea: gridArea }}
    >
      { text }
    </button>
  );
};
