import React from 'react';

import './AvailableForm.css';
import Inputs from './Inputs'

const availableForm = (props) => {
    return(
        <div>
            <form>
                <fieldset>
                    <label>Number of rooms:</label>
                    <Inputs inputs={props.inputs[0]} 
                        value={props.inputs[0].value} name={props.inputs[0].name}
                        onChange={props.onChange}/>
                </fieldset>
                <fieldset>
                    <label>Hardwood floor:</label>
                    <Inputs inputs={props.inputs[1]} value={props.inputs[1].value}
                        name={props.inputs[1].name} onChange={props.onChange}/>
                </fieldset>
                <fieldset>
                    <label>Wheelchair Access:</label>
                    <Inputs inputs={props.inputs[2]} value={props.inputs[2].value}
                        name={props.inputs[2].name} onChange={props.onChange}/>
                </fieldset>
                <fieldset>
                    <label>Pets allowed:</label>
                    <Inputs inputs={props.inputs[3]} value={props.inputs[3].value}
                        name={props.inputs[3].name} onChange={props.onChange}/>
                </fieldset>
                <fieldset>
                    <label>Fireplace:</label>
                    <Inputs inputs={props.inputs[4]} value={props.inputs[4].value}
                        name={props.inputs[4].name} onChange={props.onChange}/>
                </fieldset>
                <input type="button" onClick={props.onClick} />               
            </form>
        </div>
    );
};

export default availableForm;
