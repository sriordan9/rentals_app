import React from 'react';

import './Input.css';

const input = (props) => { 
    return(
        <div>
            <input type={props.type}></input>
            <span>{props.value}</span>
        </div>
    );
};

export default input;