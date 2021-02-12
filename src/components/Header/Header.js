import React from 'react';
import style from './header.module.scss'

const Header = ({title}) => {
    return (
        <>
        <header className={style.header}>
            <div className={style.header__top}>
                <a href='#' className={style.header__arrow}><img className={style.arrow__img} src={'arrow.png'}/></a>
                <h1 className={style.header__title}>{title}</h1>
            </div>
            
        </header>
        <div className={style.header_bottom}></div>
        </>
    );
}

export default Header;
