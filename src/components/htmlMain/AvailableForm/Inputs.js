import React from 'react';

import Input from './Input';

const inputs = (props) => props.inputs.map((input, id) => {
    return <Input 
        type={input.type} 
        value={input.value} 
        key={input.id} />
});

export default inputs;