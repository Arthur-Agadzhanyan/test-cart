import React from 'react';
import style from './style.module.scss'

const TotalPrice = ({total,order,delivery,promocode}) => {
    return (
        <div className={style.check}>
            <div className={style.calc_price}>
                <div className={style.price__item}>
                    <span>Order:</span>
                    <span>£ {order}</span>
                </div>
                <div className={style.price__item}>
                    <span>Delivery:</span>
                    <span>£ {delivery}</span>
                </div>
                {promocode 
                ?<div className={style.price__item}>
                    <span className={style.promo}>Promocode:</span>
                    <span className={style.promo}>-£ 0,4</span>
                </div>
                : ''}
            </div>
            <div className={style.total_price}>
                <span>Total:</span>
                <span>£ {total()}</span>
            </div>
        </div>
    );
}

export default TotalPrice;
