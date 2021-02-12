import React from 'react';
import style from './input.module.scss'

const Input = ({label,onChange}) => {
    return (
        <div className={style.input_block}>
            <input onChange={onChange} onFocus={(e)=>e.target.parentNode.style.border='1px solid #FFB000'} onBlur={(e)=>e.target.parentNode.style.border='1px solid #EBEBEB'} className={style.block__input} type='text' placeholder=' '/>
            <label  className={style.block__label}>{label}</label>
        </div>
    );
}

export default Input;
