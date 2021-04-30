import './avatar.scss';

export default function Avatar({
  id
}: {
  id: string
}) {
  return (
    <div className='avatar'>
      <div className='avatar-container'>
        { id }
      </div>
    </div>
  );
};
