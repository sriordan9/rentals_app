import React from 'react';

import './Input.css';

const input = (props) => { 
    return(
        <div>
            <input id={props.id} type={props.type} name={props.name}
                checked={props.selectedRadio === props.id}
                onChange={props.onChange}
                value={props.value}
                ></input>
            <span>{props.value}</span>
        </div>
    );
};

export default input;