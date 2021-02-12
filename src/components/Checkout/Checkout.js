import React from 'react';
import style from './checkout.module.scss'

const Checkout = ({totalPrice}) => {
    return (
        <div className={style.checkout}>
            <button className={style.speed_img}><img src={'speed.png'} /></button>
            <div>
                <p className={style.sec_name}>Delivery:</p>
                <p className={style.sec_value}>25-30 min</p>
            </div>
            {totalPrice() > 0
            ?<div>
                <p className={style.sec_name}>Total:</p>
                <p className={`${style.sec_value} ${style.total}`}>£ {totalPrice()}</p>
            </div>
            :''}
            <button className={style.checkout_btn}>{totalPrice() > 0 ? 'Checkout' : 'Add more products'}</button>
        </div>
    );
}

export default Checkout;
