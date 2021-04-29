import './page-split.scss';

export default function PageLeft({
  child
}: {
  child: JSX.Element
}) {
  return (
    <div id='page-left'>
      { child }
    </div>
  );
};
