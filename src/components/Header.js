import React from 'react';

import './Header.css';
import logo from './images/jpg_files/logo.png';
import logoName from './images/jpg_files/logo_name.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/fontawesome-free-solid';

const header = (props) => {
    return (
        <div className="header">
            <header>
                <a href="/"><img className="logo" src={ logo } alt="Apartments logo"/></a>
                <a href="/"><img className="logoName"src={ logoName } alt="Apartments logo"/></a>
                <nav>
                    <FontAwesomeIcon id="icon"icon={ faAlignJustify } size="2x" />
                    <ul id="list">
                        <li><a href="/amenities">Amenities/Features</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/residents">Residents</a></li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default header;