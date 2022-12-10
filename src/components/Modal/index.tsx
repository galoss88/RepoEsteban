import { HTMLAttributes } from 'react';
import Icon from '../../components/Icon';
import { WithChildren } from '../../models/General';
import { ContainerModal, StyledModal, StyledSpan } from './styles';

type IModalSize = 'default' | 'xs' | 'sm' | 'md';

export type ModalProps = WithChildren<{
  isOpent: boolean;
  setIsOpent?: (val: boolean) => void;
  size?: IModalSize;
  isStatic?: boolean;
}>;

export const defaultProps: Pick<ModalProps, 'isOpent' | 'size'> = {
  isOpent: true,
  size: 'xs',
};

const Modal = ({
  children,
  isOpent,
  setIsOpent,
  size,
  isStatic,
  ...props
}: ModalProps & HTMLAttributes<HTMLDivElement>) => {
  const onClose = () => {
    setIsOpent && setIsOpent(false);
  };
  return (
    <ContainerModal data-testid="modal-component" {...props} isOpent={isOpent}>
      <StyledModal size={size} isOpent={isOpent} isStatic={isStatic}>
        <StyledSpan>
          <Icon data-testid="onclose-icon-modal" name="union" onClick={() => onClose()} />
        </StyledSpan>
        {children}
      </StyledModal>
    </ContainerModal>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
