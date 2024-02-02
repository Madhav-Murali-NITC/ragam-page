import React from 'react';
import './Footer.css';
import buttonfootersvg from '../assets/buttonfooter.svg';
import nitclogosvg from '../assets/nitclogo.svg';
import ragamsvg from '../assets/ragamlogo.svg';

const Footer = () => {
    return (
        <div className = 'footer--container'>
            
            <div className='footer--topthird--svgs'>
                <img src = {nitclogosvg} alt = 'not showing' />
            </div>



            <div className='footer--middlethird--svgs'>
                <img src = {buttonfootersvg} alt = 'not showing' />
            </div>



            <div className='footer--bottomthird--text'>
                <h4>National Institute of Technology, Calicut</h4>
                <p>Calicut Mukkam Road, Kattangal </p>
                <p>Kerala 673601</p>
            </div>
            
        </div>
    );
};

export default Footer;