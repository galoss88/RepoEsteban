import styled from 'styled-components';
import { IForm } from '..';

export const FormStyled = styled.form<IForm>`
  background: ${({ size }) => (size === 'medium' ? '#fafbfd' : '#000')};
  box-shadow: 0 0rem 1rem black;
  border-radius: 4px;
  padding: 20px;
  color: #31639c;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  max-width: ${({ size }) => (size === 'large' ? '500px' : '700px')};
 
  gap: 20px;
  position: absolute;
  top: 2rem;
  > input {
    height: 30px;
  }

  > span {
    color: #e34646;
    text-align: center;
  }

  > button {
    background: #31639c;
    height: 50px;

    &:disabled {
      background-color: #a0a0a0;
      cursor: not-allowed;
    }
  }

  @media screen and (max-width: 768px) {
    background: red;
  }
`;
