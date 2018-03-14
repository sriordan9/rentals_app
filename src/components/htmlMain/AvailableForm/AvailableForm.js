import React from 'react';

import './AvailableForm.css';
import Inputs from './Inputs'

const availableForm = (props) => {
    return(
        <div>
            <form>
                <fieldset>
                    <label>Number of rooms:</label>
                    <Inputs className="input" inputs={props.inputs[0]} value={props.inputs[0].value}/>
                </fieldset>
                <fieldset>
                    <label>Hardwood floor:</label>
                    <Inputs inputs={props.inputs[1]} value={props.inputs[1].value}/>
                </fieldset>
                <fieldset>
                    <label>Wheelchair Access:</label>
                    <Inputs inputs={props.inputs[1]} value={props.inputs[1].value}/>
                </fieldset>
                <fieldset>
                    <label>Pets allowed:</label>
                    <Inputs inputs={props.inputs[1]} value={props.inputs[1].value}/>
                </fieldset>
                <fieldset>
                    <label>Fireplace:</label>
                    <Inputs inputs={props.inputs[1]} value={props.inputs[1].value}/>
                </fieldset>
                <input type="submit" />               
            </form>
        </div>
    );
};

export default availableForm;
