import React from 'react';
import CustomBox from './CustomBox';
import emailsvg from '../assets/email.svg';
import locationsvg from '../assets/location.svg';
import phonesvg from '../assets/phone.svg';
import './Contacts.css';
import './CustomBox.css';

const Contacts = () => {
    return (
       <div className = 'second--container'>
        <h1>Contact us</h1>
        <div className='custombox--container'>
            <CustomBox svg = {phonesvg} heading = 'BY PHONE' ptext = '+91 9994058168' />
            <CustomBox svg = {locationsvg} heading = 'FIND US' ptext = 'National Institute of Technology Calicut, Kerala 673601.' />
            <CustomBox svg = {emailsvg} heading = 'BY EMAIL' ptext = 'contactus@nitc.ac.in' />
             
        </div>   
       </div>   
)};

export default Contacts;