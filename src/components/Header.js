import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <div className="header">
            <p className="headerSymbol">Supernatural Apartments</p>
            <ul>
                <li>Amenities/Features</li>
                <li>Pricing</li>
                <li>Residents</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
};

export default header;