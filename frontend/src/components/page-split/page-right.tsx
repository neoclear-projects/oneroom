import './page-split.scss';

export default function PageRight({
  child
}: {
  child: JSX.Element
}) {
  return (
    <div id='page-right'>
      { child }
    </div>
  );
};
