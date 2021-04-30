import { useRef } from 'react';
import Divider from '../divider';
import './modal.scss';

type ModalWidth
  = 'tiny'
  | 'thin'
  | 'medium'
  | 'wide';

function clickHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                      ref: React.RefObject<HTMLDivElement>,
                      handler: () => void) {
  if (e.target === ref.current) {
    handler();
  }
}

export default function Modal({
  show,
  header,
  body,
  ending = null,
  width = 'medium',
  onClose
}: {
  show: boolean,
  header: JSX.Element,
  body: JSX.Element,
  ending?: JSX.Element | null,
  width?: ModalWidth,
  onClose: () => void
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  const classname = show ? 'room-modal modal-show' : 'room-modal modal-hide';

  return (
    <div
      className={classname}
      onClick={e => clickHandler(e, modalRef, onClose)}
      ref={modalRef}
    >
      <div className={'modal-content-' + width}>
        <span
          className='close'
          onClick={onClose}
        >
          &times;
        </span>
        { header }
        <Divider
          margin={12}
          color='light'
        />
        { body }
        {
          ending
          ? <Divider
              margin={12}
              color='light'
            />
          : null
        }
        { ending }
      </div>
    </div>
  );
};
