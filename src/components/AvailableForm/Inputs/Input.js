import React from 'react';

import './Input.css';

const input = (props) => { 
    return(
        <div>
            <input type={props.type} value={props.value} name={props.name}
                onChange={props.onChange}></input>
            <span>{props.value}</span>
        </div>
    );
};

export default input;