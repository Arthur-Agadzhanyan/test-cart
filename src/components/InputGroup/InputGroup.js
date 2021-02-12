import React from 'react';
import Input from '../Input/Input';
import style from './style.module.scss'

const InputGroup = ({flex,labels,padding='0px'}) => {

    return (
        <div className={style.input_group} style={{padding:padding}}>
            {labels && labels.map((item,i)=>{
                return <div key={`${item}_${i}`} className={style.input_container} style={{flex:flex}}>
                    <Input label={item}/>
                </div>
            })}
        </div>
    );
}

export default InputGroup;
