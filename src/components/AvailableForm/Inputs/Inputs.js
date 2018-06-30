import React from 'react';

import Input from './Input';

const inputs = (props) => props.inputs.map((input, id) => {
    return <Input 
        id={input.id}
        type={input.type} 
        value={input.value}
        name={input.name} 
        key={input.id} 
        onChange={props.onChange}
        selectedRadio={props.selectedRadio} />
});

export default inputs;