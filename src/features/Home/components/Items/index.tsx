import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  ContainerItems,
  ItemWrapperStyled,
  ItemDetailStyled,
  Button,
  ContainerStyled,
  ImageItem,
  PriceItem,
} from './styles';
import { getCart, ICartItem, IItem, updateCart } from '../../../../redux/cartSlice';

import { MdOutlineAddShoppingCart } from 'react-icons/md';
export type ItemsProps = {
  list: IItem[];
};

export type ItemWrapperProps = {
  color: string;
};

export const Items = ({ list }: ItemsProps) => {
  const dispatch = useAppDispatch();
  const cartList: ICartItem[] = useAppSelector(getCart);


  const onAddItemToCart = (item: IItem) => {
    const index = cartList.findIndex((m) => m.id === item.id);
    if (index === -1) {
      dispatch(updateCart([...cartList, { ...item, quantity: 1 }]));
    } else {
      const tempNewCart = cartList.map((element) =>
        element.id == item.id ? { ...element, quantity: element.quantity + 1 } : element
      );
      dispatch(updateCart(tempNewCart));
    }
  };
 
  return (
    <ContainerItems>
    <ContainerStyled data-testid="container-item">
      {list.map((item, i) => (
        <ItemWrapperStyled key={i} color="#ffffff">
          <ItemDetailStyled>{item.name}</ItemDetailStyled>
          <PriceItem>${item.price}</PriceItem>
          <ImageItem src="https://mexx-img-2019.s3.amazonaws.com/39014_1.jpeg" />
          <Button onClick={() => onAddItemToCart(item)}>
            <MdOutlineAddShoppingCart size={25} color={'#909090'} />
          </Button>
        </ItemWrapperStyled>
      ))}
    </ContainerStyled>
    </ContainerItems>
  );
};
