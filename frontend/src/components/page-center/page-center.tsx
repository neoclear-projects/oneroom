import './page-center.scss';

export default function PageCenter({
  child
}: {
  child: JSX.Element
}) {
  return (
    <div id='page-center'>
      { child }
    </div>
  );
};
