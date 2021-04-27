import './header.scss';

type HeaderSize
  = 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'big';

type HeaderAlign
  = 'left'
  | 'center'
  | 'right';

  /**
 * Customized header for one room
 * 
 * @param param Attributes required by header component
 * @returns Header component
 */
export default function Header({
  text,
  size = 'medium',
  align = 'center',
  gridArea = undefined,
}: {
  text: string
  size?: HeaderSize,
  align?: HeaderAlign,
  gridArea?: string
}) {
  return (
    <div
      className={'room-header-' + size}
      style={{
        textAlign: align,
        gridArea: gridArea
      }}
    >
      { text }
    </div>
  );
};
