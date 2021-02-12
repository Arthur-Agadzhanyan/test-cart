import React from 'react';
import style from './style.module.scss'

const CartItem = ({ img, title, price, priceChanged = '', offer = '', quantity, onAdd, onRemove }) => {
    return (
        <div className={style.cart_item}>
            <div className={style.item__img}>
                <img src={img} />
            </div>
            <div className={style.item__content}>
                <h2 className={style.content__title}>{title}</h2>
                {priceChanged && <div className={style.alert}>Price has been changed: <span className={`${style.bold_text} ${style.old_price}`}>(£{priceChanged})</span></div>}
                {offer && <div className={style.alert}>Special offer: <span className={style.bold_text}>-{offer}%</span></div>}
                <div className={style.price_container}>
                    <span className={style.price} style={{ color: offer | priceChanged ? '#E5243F' : '#333' }}>£ {price}</span>
                    <span className={style.one_item_price}> · 1 pc / £{price}</span>
                </div>
            </div>
            <div className={style.item__controls}>
                {quantity
                    ? <button className={style.controls__delete} onClick={onRemove}>
                        <img src='delete_btn.png' />
                    </button>
                    : ''}
                <div className={style.controls__quantity}>
                    {quantity ? quantity : <span className={style.add_text} onClick={onAdd}>Add</span>}
                </div>
                <button className={style.controls__add} onClick={onAdd}>
                    <img src='add_btn.png' />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
