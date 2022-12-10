import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { clearCart, getCart, ICartItem, updateCart } from '../../../../redux/cartSlice';
import { CartButton } from './CartButton';
import { MdOutlineDeleteForever } from "react-icons/md";
import {
  CartItemStyled,
  CartItemWrapperStyled,
  CartWrapperStyled,
  DeleteIcon,
  DivCart,
} from './styles';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCart);
  const [showCart, setShowCart] = useState(false);

  const getTotal = (list) => {
    const total = list.reduce((current, next) => current + next.price * next.quantity, 0);
    return total;
  };

  const onDeleteItem = (item: ICartItem) => {
    const tempNewCart: ICartItem[] = [];
    cartItems.forEach((i) => {
      if (i.id === item.id) {
        i.quantity !== 1 && tempNewCart.push({ ...i, quantity: i.quantity - 1 });
      } else {
        tempNewCart.push(i);
      }
    });

    dispatch(updateCart(tempNewCart));
  };

  const handleClick = () => dispatch(clearCart());

  return (
    <DivCart>
      <CartButton setshow={setShowCart} show={showCart} cartItemsLength= {cartItems.length}></CartButton>
      <CartWrapperStyled data-testid="cart-item" showcart={showCart} >
        {cartItems.length === 0 && <CartItemStyled>Carrito Vacío</CartItemStyled>}
        <div data-testid="cart-items-list">
          {cartItems.map((item, i) => (
            <CartItemWrapperStyled key={i}>
              <CartItemStyled>
                <p>
                  {item.name} x {item.quantity} = {item.quantity * item.price}
                </p>
                <DeleteIcon onClick={() => onDeleteItem(item)}><MdOutlineDeleteForever size={16} color={"grey"}/></DeleteIcon>
              </CartItemStyled>
            </CartItemWrapperStyled>
          ))}
        </div>
        <hr/>
        <br/>
        <p>
          <span>Total: </span>
          <b>{getTotal(cartItems)}</b>
        </p>
        {cartItems.length > 0 && <button onClick={handleClick}>Clear</button>}
      </CartWrapperStyled>
    </DivCart>
  );
};
