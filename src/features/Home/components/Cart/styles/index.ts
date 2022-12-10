import styled from 'styled-components';

export const DivCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  right: 0px;
  width: 0px;
  height: 0px;
`;

export const CartWrapperStyled = styled.div<{ showcart: boolean }>`
  /* Posicionamiento */
  position: absolute;

  top: 2rem;
  height: 500px;
  overflow: auto;
  width: 12rem;
  padding: 0 10px;
  border-radius: 5px;
  display: ${(props) => (props.showcart === false ? 'none' : 'block')};

  /* Diseño */
  background-color: #fafbfd;
  box-shadow: 0 0 0.1rem black;

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.showcart === false ? 'none' : 'block')};
  }
`;

export const CartItemStyled = styled.div`
  flex: 1;
  display: inline-flex;
  margin-top: 1rem;
`;

export const DeleteIcon = styled.button`
  border: none;
  cursor: pointer;
  margin-top: 0.2rem;
  background-color: rgba(50, 50, 50, 0);
`;

export const CartItemWrapperStyled = styled.div`  
  flex: 1;
  padding: 0px;
  
`;

export const ButtonCart = styled.button`
  position: absolute;
  top:6px;
  right: 0px;
  width: 3rem;
  height: 1rem;
  border: none;
  background-color: #cac4b0;
  cursor: pointer;
`;
