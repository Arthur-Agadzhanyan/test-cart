import React from 'react';
import style from './address.module.scss'

const AddressInput = ({label}) => {
    return (
        <div className={style.input_block}>
            <input onFocus={(e)=>e.target.parentNode.style.border='1px solid #FFB000'} onBlur={(e)=>e.target.parentNode.style.border='1px solid #EBEBEB'} className={style.block__input} type='text' placeholder=' '/>
            <label  className={style.block__label}>{label}</label>
            <img className={style.block__arrow} src='address-arrow.png'/>
        </div>
    );
}

export default AddressInput;
