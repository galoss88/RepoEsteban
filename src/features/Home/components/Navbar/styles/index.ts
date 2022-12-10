import styled from 'styled-components';

export const NavBar = styled.nav`
  display: inline-flex;
  position: fixed;
  background-color: #cac4b0;
  height: 2rem;
  width: 97%;
  z-index: 100;
`;
export const NavForm = styled.button`
  position: relative;
  left: 0.5rem;
  background-color: #cac4b0;
  color: #31639c;
  font-size: 1rem;
  font-weight: bold;
  font-family: montserrat;
  border: none;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 1rem black;
    border-radius: 10px;
  }
`;
