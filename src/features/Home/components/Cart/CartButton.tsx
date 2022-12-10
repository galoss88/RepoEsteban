import { ButtonCart } from './styles/index';

import { MdShoppingCart, MdOutlineShoppingCart } from 'react-icons/md';
export const CartButton = ({ setshow, show, cartItemsLength }) => {
  return (
    <ButtonCart onClick={() => setshow(!show)}>
      {cartItemsLength === 0 ? (
        <MdOutlineShoppingCart size={20} color={"#31639c"} />
      ) : (
        <MdShoppingCart size={20} style={{ color: '#31639c' }} />
      )}
    </ButtonCart>
  );
};
