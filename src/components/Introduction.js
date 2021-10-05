import React, { useState } from 'react';
import Button from './Button';
import './Introduction.css';


const Introduction = ({ header, description, imgSrc, imgAlt, btnText }) => {

    const [hover, setHover] = useState(false);

    return (
        <div className="intro-container" >
            <img className="intro-img"
                src={imgSrc}
                alt={imgAlt} />
            <div className="intro-wrapper">
                <h1 className="intro-header"> {header}</h1>
                <p className="intro-parag">
                    {description}
                </p>
                <div className="btn-section" id="get-started-btn">
                    <Button buttonStyle="btn--outline-gradient" buttonSize="btn--medium">
                        {btnText}
                    </Button>
                    <i className="fas fa-arrow-right" />
                </div>
            </div>
        </div>
    )
}

export default Introduction
