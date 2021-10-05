import React from 'react';
import './Card.css';


const Card = ({ imgSrc, imgAlt, h3, p }) => {
    return (
        <div className="card-container">
            <img className="card-picture"
                src={`asset/img/${imgSrc}`}
                alt={imgAlt} />
            <div className="card-content">
                <h3 className="card-title">
                    {h3}
                </h3>
                <p className="card-description">
                    {p}
                </p>
            </div>
        </div>
    )
}

export default Card
