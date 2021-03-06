import React from 'react';
import {Link} from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/fontawesome-free-solid';

import './Header.css';
import logo from '../images/logo.png';
import logoName from '../images/logo_name.png';

const header = () => {
    return (
        <div className="header">
            <header>
                <Link to="/"><img className="logo" src={ logo } alt="Apartments logo"/></Link>
                <Link to="/"><img className="logoName"src={ logoName } alt="Apartments logo"/></Link>
                <nav>
                    <FontAwesomeIcon id="icon"icon={ faAlignJustify } size="2x" />
                    <ul id="list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/amenities">Amenities/Features</Link></li>
                        <li><Link to="/loginPage">My Acct</Link></li>
                        <li className="contactButton"><a>Contact Us</a></li>
                        <ul className="contactInfo">
                            <li>Phone: 1-800-867-5309</li>
                            <li>Email: jennyjenny@famousong.com</li>
                        </ul>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default header;