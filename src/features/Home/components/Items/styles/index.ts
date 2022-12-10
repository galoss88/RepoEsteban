/* istanbul ignore file */
import styled from 'styled-components';
import { ItemWrapperProps } from '..';

export const ContainerItems = styled.div`
display: flex;
width: 100%;
height: 100%;
position: relative;
top: 4rem;
justify-content: center;

`

export const ContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;   
  top: 50px;
  align-content: flex-start;
  justify-content:flex-start;
  width: 50rem;
  
  
`;

export const ItemWrapperStyled = styled.div<ItemWrapperProps>`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 1;
  margin: 3px;
  
  height: 15rem;
  width: 12rem;
  padding: 2rem;
  position: relative;
  background-color: ${(props) => props.color};
  box-shadow: 0 0.1rem 0.5rem black;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 0.1rem 1rem black; /*valor desplazamiento sombra derecha, sombra abajo, difuminacion sombra, color */
  }
`;

export const ItemDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  bottom: 60px;
  margin-left: 3px;
  font-size: 0.8rem;
  color: black;
  height: 4%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const PriceItem = styled.span`
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  top: 0%;
  right: 0%;
  margin-right: 3px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  height: 2rem;
  width: 3rem;  
  position: absolute;
  bottom: 0.5px;
  margin-bottom: 2px;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0.1rem 1rem black;    
    transition: all 0.3s;
  }
`;

export const ImageItem = styled.img`
  object-fit: cover;
  width: 100%;
  height: 75%;
`;
