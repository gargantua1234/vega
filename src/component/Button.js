import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = ({ children, buttonStyle, buttonSize, onClick, type }) => {
    const FIRST_ELEMENT = 0;
    const STYLES = ['btn--primary', 'btn--outline'];
    const SIZES = ['btn--medium', 'btn--large'];

    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[FIRST_ELEMENT];

    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[FIRST_ELEMENT];

    return (
        <Link to="/sign-up" className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};

export default Button;
