import { useHistory } from 'react-router-dom';
import './navigation.scss';

// Navigation component
export default function NavigateItem({
  name,
  link,
  focused,
  onClick
}: {
  name: string,
  link: string,
  focused: boolean,
  onClick: () => void
}) {
  const history = useHistory();

  return (
    <div
      className={focused ? 'navigate-item-focused' : 'navigate-item'}
      key={name}
      style={{ gridArea: name }}
      onClick={() => {
        history.push(link);
        onClick();
      }}
    >
      { name }
    </div>
  );
}
