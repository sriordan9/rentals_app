import React from 'react';

import Input from './Input';

const inputs = (props) => props.inputs.map((input, id) => {
    return <Input 
        type={input.type} 
        value={input.value}
        name={input.name} 
        key={input.id} 
        onChange={props.onChange}/>
});

export default inputs;