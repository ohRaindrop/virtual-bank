import React from 'react';
import './FooterLinks.css'


const FooterLinks = ({ id, link }) => {

    return (
        <div className="footer-content">
            <div className="links-wrapper">
                <ul className="links-arg"> {id}
                    {link.map((link, index) => {
                        return (<li className="links">
                            <a className="links-anchor" href="" target="_self">
                                {link}
                            </a>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FooterLinks
