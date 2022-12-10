import styled from 'styled-components';
import { ButtonProps } from '..';

export const ButtonWrapper = styled.button<Omit<ButtonProps, 'value'>>`
  width: ${({ size }) => (size === 'sm' ? '150px' : '250px')};
  height: ${({ size }) => (size === 'sm' ? '36px' : '50px')};
  box-sizing: border-box;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  font-size: ${({ size }) => (size === 'sm' ? '14px' : '20px')};
  background-color: ${({ variant }) => (variant === 'black' ? '#000' : '#0099ff')};
  border-color: ${({ variant }) => (variant === 'black' ? '#000' : '#999')};
  color: ${({ variant }) => (variant === 'black' ? '#fff' : '#000')};
  transition: transform 0.1s ease-in-out;
  &:disabled {
    cursor: not-allowed;
    background-color: #e4e4e4;
  }
  &:active {
    transform: scale(0.99);
  }
`;
