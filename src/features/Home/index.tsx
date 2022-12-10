import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { fetchItemsAsync, getItems, getItemsStatus } from '../../redux/cartSlice';
import { Items } from './components/Items';
import Navbar from './components/Navbar/Navbar';
import { HomeStyled, HomeWrapperStyled } from './styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const itemList = useAppSelector(getItems);
  const [isOpentModal, setIsOpentModal] = useState(false);

  useEffect(() => {
    dispatch(fetchItemsAsync());
  }, []);

  const Loading = () => (
    <div data-testid="el_loading">
      <p>Loading...</p>
    </div>
  );

  return (
    <>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <HomeWrapperStyled>
          <Navbar />

          <HomeStyled>
            <Items list={itemList} />
          </HomeStyled>
        </HomeWrapperStyled>
      )}
    </>
  );
};

export default Home;
