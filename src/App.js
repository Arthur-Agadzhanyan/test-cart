import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import AddressInput from './components/AddressInput/AddressInput';
import BlockHeader from './components/BlockHeader/BlockHeader';
import CartItem from './components/CartItem/CartItem';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import InputGroup from './components/InputGroup/InputGroup';
import TotalPrice from './components/TotalPrice/TotalPrice';
import { addItem, clearCart, removeItem } from './redux/actionCreator';

function App({ cart, onAddItem, onRemoveItem, onClearCart }) {
  const [delivery] = useState(0.4);
  const [promocode, setPromocode] = useState({
    list: ['GHYU907H', 'H709UYHG'],
    isCorrect: false,
    discount: 0.4
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  })

  const inputHandler = function (e) {
    promocode.list.includes(e.target.value) ? setPromocode({ ...promocode, isCorrect: true }) : setPromocode({ ...promocode, isCorrect: false })
  }

  const calculateTotalPrice = () => {
    if (promocode.isCorrect && cart.totalPrice > 0) {
      return (cart.totalPrice + delivery - promocode.discount).toFixed(2)
    } if (cart.totalPrice > 0) {
      return (cart.totalPrice + delivery).toFixed(2)
    } else {
      return 0
    }
  }

  return (
    <>
      <Header title={"Cart"} />
      <section className='container container-white'>
        <BlockHeader title='Delivery address' iconSrc='delete.png' width='auto' iconFunc={() => onClearCart()} />
        <AddressInput label='London' />
        <InputGroup flex='0 1 31%' labels={['Flat', 'Floor', 'Block']} padding='10px 0px 0px 0px' />
        <BlockHeader title={`${cart.totalQuantity} items`} width='auto' />
        {cart.cart.map(item => {
          return <Fragment key={`${item.id}`}>
            <CartItem img={item.img} title={item.title} price={item.price} priceChanged={item.priceChanged} offer={item.offer} quantity={item.quantity} onAdd={() => { onAddItem(item.id) }} onRemove={() => { onRemoveItem(item.id) }} />
          </Fragment>
        })}
      </section>

      <section className='container'>
        <BlockHeader title='Payment' width='auto' />
        <Input onChange={(e) => inputHandler(e)} label={'Promocode'} />
      </section>
      <section className='container container-white'>
        <TotalPrice
          promocode={promocode.isCorrect}
          delivery={cart.totalPrice ? delivery : 0}
          order={cart.totalPrice.toFixed(2)}
          total={calculateTotalPrice} />
      </section>
      <Checkout totalPrice={calculateTotalPrice} />
    </>
  );
}

const stateToProps = state => ({
  cart: state.cart
})

const dispatchToProps = dispatch => ({
  onAddItem: (id) => {
    dispatch(addItem(id))
  },
  onRemoveItem: (id) => {
    dispatch(removeItem(id))
  },
  onClearCart: () => {
    dispatch(clearCart())
  }
})

export default connect(stateToProps, dispatchToProps)(App)
