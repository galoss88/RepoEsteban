import styled from 'styled-components';
import { ModalProps } from '..';
import { theme } from '../../../theme';
import { BREAKPOINTS } from '../../../utils/constants/breakpoints';
import { mediaQuery } from '../../../utils/mediaQuery';

export const ContainerModal = styled.div<ModalProps>`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: '#ffffff';
  opacity: ${({ isOpent }) => (isOpent ? 1 : 0)};
  visibility: ${({ isOpent }) => (isOpent ? 'visible' : 'hidden')};

`;

export const StyledSpan = styled.span`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
`;

export const StyledModal = styled.div<ModalProps>`
  width: ${({ size = 'xs' }) => theme.modal.size[size].width};
  height: ${({ size = 'xs', isStatic }) => (isStatic ? 'auto' : theme.modal.size[size].height)};
  display: ${({ isOpent }) => (isOpent ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  outline: none;
  background: '#ffffff';
  border: 1px solid grey;
  border-radius: 5px;

  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 14px 18px;
  gap: ${({ isStatic }) => (isStatic ? '8px' : '0')};

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.text?.color.card};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text?.color.principal};
    border-radius: 9999px;
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    width: 81%;
    height: ${({ isStatic }) => (isStatic ? 'auto' : '90%')};
  }

  ${mediaQuery.mobileOnly(`
    width: 90%;
  `)}
`;
