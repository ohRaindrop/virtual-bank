import React from 'react';
import './Presentation.css';

const Presentation = ({ headerQ, companyName, p1, p2 }) => {
    return (
        <div className="text-wrapper">
            <div className="text-content">
                <h2 className="question"> {headerQ}
                    <span className="company-name"> {companyName} </span>
                    ?</h2>
                <p className="parag">
                    {p1}
                </p>
                <p className="parag">
                    {p2}
                </p>
            </div>
        </div>
    )
}

export default Presentation
