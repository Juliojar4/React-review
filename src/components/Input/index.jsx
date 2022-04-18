import React from 'react';
import './style.scss';

const Input = ({
    type = 'text',
    placeholder,
    maxLength,
    minLength,
    inputCustomEvent,
}) => {
    return (
        <div className="wrap-input">
            <input
                className="input"
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
                inputCustomEvent={inputCustomEvent}
            />
        </div>
    );
};

export default Input;
