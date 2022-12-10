import { useState } from 'react';
import { NavBar, NavForm } from './styles/index';
import { Cart } from '../Cart/index';

import Form from '../Form/index';
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <NavBar>
      <NavForm onClick={()=>setShow(!show)}>
      Crear item
        
      </NavForm>
      <Form show={show}/>
      <Cart data-testid="cart-component" />
    </NavBar>
  );
}
