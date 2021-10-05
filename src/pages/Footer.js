import React from 'react';
import FooterLinks from '../components/FooterLinks';
import { footerData } from '../data';

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer-wrapper">
                {footerData.map((myData, index) => {
                    return <FooterLinks key={myData.id} {...myData} />
                })}
            </div>
            <div className="rights">
                LOGO - logo - &copy; - 2021
            </div>
        </section>
    )
}

export default Footer
