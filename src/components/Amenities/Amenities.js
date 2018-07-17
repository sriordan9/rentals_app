import React from 'react';
import './Amenities.css';

const amenities = () => {
    return (
        <div className="amenities">
            <section>
                <div className="amenities-block">
                    <h1> AMENITIES</h1>
                    <ul>
                        <li>24/7 Fitness Center</li>
                        <li>Clubhouse</li>
                        <li>Swimming Pool & Jacuzzi Tub</li>
                        <li>Basketball Court</li> 
                        <li>Computer Lab</li>
                        <li>Tennis Court</li>
                        <li>Dog Park</li>
                    </ul>
                </div>
                <div className="features-block">
                    <h1> FEATURES</h1>
                    <ul>
                        <li>High Speed Internet</li>
                        <li>Unit Washer and Dyer</li>
                        <li>LED Light Fixtures</li>
                        <li>Granite Countertops</li>
                        <li>Wood floors</li>
                        <li>Stainless Steel Appliances</li>
                        <li>Leather Furniture</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default amenities;