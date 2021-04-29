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
  inverted = false,
  shadowed = false
}: {
  text: string
  onClick: () => void,
  gridArea?: string | undefined,
  inverted?: boolean,
  shadowed?: boolean
}) {

  // Prepare classname for different styles
  let className = inverted ? 'room-button-inverted' : 'room-button';
  if (shadowed) {
    className += ' room-button-shadow';
  }

  return (
    <button
      className={className}
      onClick={onClick}
      style={{ gridArea: gridArea }}
    >
      { text }
    </button>
  );
};
