import PageLeft from './page-left';
import PageRight from './page-right';
import './page-split.scss';

export default function PageSplit({
  leftChild,
  rightChild
}: {
  leftChild: JSX.Element,
  rightChild: JSX.Element
}) {
  return (
    <div id='page-split'>
      <PageLeft child={leftChild} />
      <PageRight child={rightChild} />
    </div>
  );
};
