import './button.scss';

export default function Button({
  text,
  onClick,
  gridArea = undefined,
  inverted = false
}: {
  text: string
  onClick: () => void,
  gridArea?: string | undefined,
  inverted?: boolean
}) {
  return (
    <button
      className={inverted ? 'room-button-inverted' : 'room-button'}
      onClick={onClick}
      style={{ gridArea: gridArea }}
    >
      { text }
    </button>
  );
};
