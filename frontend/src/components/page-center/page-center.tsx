import './page-center.scss';

/**
 * Page center component, used to center a component in the page
 * 
 * @param param Attributes requested by page center
 * @returns Page center component
 */
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
