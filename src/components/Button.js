import React from 'react';

const Button = ({onClick,text,style, disabled}) => {
    return (
        <button className="btn" style={style} disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
