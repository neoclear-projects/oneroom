import './button.scss';

/**
 * Customized button for one room
 * 
 * @param param Attributes required by button component
 * @returns Button component
 */
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
