import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <div className="header">
            <header>
                <p className="headerSymbol"><a href="/">Supernatural Apartments</a></p>
                <nav>
                    <ul>
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