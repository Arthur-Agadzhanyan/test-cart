import React from 'react';

const Title = ({text,size,weight,family="'Noto Sans', sans-serif",padding='0px'}) => {
    const style = {
        fontSize: size,
        fontWeight: weight,
        fontFamily:family,
        padding: padding
    }
    return (
        <h1 style={style}>{text}</h1>
    );
}

export default Title;
