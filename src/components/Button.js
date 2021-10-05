import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const SIZES = ["btn--medium", "btn--large"];
const STYLES = ["btn--primary", "btn--outline", "btn--outline-gradient"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize, toBtn = "/login" }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={toBtn} className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link >
    )
    //whatever's put inside the button, it will be displayed
}
export default Button






