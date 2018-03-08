import React from 'react';
import kitchen_pic from './jpg_files/apartment_kitchen.jpg';
import './Image.css';

const mainImage = () => {
    return (
        <div className="image">
            <img src={kitchen_pic} alt="apartment kitchen"/>
        </div>
    );
};

export default mainImage;