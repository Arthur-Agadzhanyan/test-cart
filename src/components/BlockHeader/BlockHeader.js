import React from 'react';
import style from './block-header.module.scss'
import Title from '../Title/Title'

const BlockHeader = ({title,iconSrc='',width,iconFunc}) => {
    return (
        <div className={style.block_header}>
          <Title text={title} size='18px' weight='600' padding='18px 0px'/>
          {iconSrc ? <img src={iconSrc} width={width} onClick={iconFunc}/> : ''}
        </div>
    );
}

export default BlockHeader;
