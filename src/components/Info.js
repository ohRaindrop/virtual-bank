import React from 'react';
import Button from './Button';
import './Info.css';

const Info = ({ h2, h3, p, btnText, imgSrc, imgError, imgAlt }) => {

    /*
    const onError = () => {
        this.onerror = null;
        this.src = '.img/mobile_payment.png'
    }
        */

    return (

        <div className="info-row">
            <div className="text-column">
                <div className="text-wrap">
                    <h3 className="sub-header"> {h3}</h3>
                    <h2 className="header"> {h2}</h2>
                    <p className="description">
                        {p}
                    </p>
                </div>
                <div className="btn-section">
                    <Button buttonStyle="btn--outline-gradient" buttonSize="btn--medium">
                        {btnText}
                    </Button>
                </div>
            </div>
            <div className="pic-column">
                <div className="pic-wrap">
                    <img className="info-img"
                        src={`asset/img/${imgSrc}`}
                        alt={imgAlt} />
                </div>
            </div>
        </div>

    )
}

export default Info
