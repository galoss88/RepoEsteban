import { IItem } from '../../redux/cartSlice';

const delay = 1000;

export const createItem = (stack, product) => {
  return new Promise<IItem[]>((resolve) => {
    setTimeout(() => {
      const list = [...stack];
      list.unshift(product);
      resolve(list);
    }, delay);
  });
};
