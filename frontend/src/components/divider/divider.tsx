import './divider.scss';

type DividerDirection = 'horizontal' | 'vertical';
type DividerColor = 'dark' | 'light';

export default function Divider({
  width = 4,
  round = true,
  margin = 4,
  direction = 'horizontal',
  color = 'dark'
}: {
  width?: number,
  round?: boolean,
  margin?: number,
  direction?: DividerDirection,
  color?: DividerColor
}) {
  const isHorizontal = direction === 'horizontal';
  const maxRadius = Math.pow(2, 32);

  return (
    <div
      className={color === 'dark' ? 'room-divider' : 'room-divider-shadow'}
      style={{
        height: isHorizontal ? width : '100%',
        width: !isHorizontal ? width : '100%',
        borderRadius: round ? maxRadius : 0,
        marginLeft: isHorizontal ? 0 : margin,
        marginRight: isHorizontal ? 0 : margin,
        marginTop: !isHorizontal ? 0 : margin,
        marginBottom: !isHorizontal ? 0 : margin
      }}
    />
  );
};
