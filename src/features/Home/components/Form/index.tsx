import { useEffect } from '@storybook/addons';
import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getItems, getItemsStatus, IItem } from '../../../../redux/cartSlice';
import { createItemAsync } from '../../../../redux/cartSlice/thunks';
import { FormStyled } from './styles';

export interface IForm {
  onClose?: (status: boolean) => void,
  size: 'medium' | 'large';
  show:boolean;
}

const defaultProps: IForm = {
  size: 'medium',
  show:false,
};

const Form = ({ ...props }: IForm, ) => {

  const dispatch = useAppDispatch();
  const status = useAppSelector(getItemsStatus);
  const list = useAppSelector(getItems);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [error, setError] = useState('');


  const onSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(status != 'loading') {
      if (!name || !price) return setError('Empty data!!');
  
      const product: IItem = {
        id: Date.now(),
        name,
        price,
      };
  
      error && setError('');
  
      await dispatch(createItemAsync({list, product}));
      setName('');
      //  onClose && onClose(false);
    }

    setPrice(0);
  };

  return (
    <>
      <FormStyled onSubmit={onSend} {...props} className="form-class">
        <h2>Add item</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="input-name"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          data-testid="input-price"
        />
        {error && <span data-testid="error-message">{error}</span>}
        <button data-testid="btn">{status == 'loading' ? 'Cargando...' : 'Agregar'}</button>
      </FormStyled>
    </>
  );
};

Form.defaultProps = defaultProps;

export default Form;
