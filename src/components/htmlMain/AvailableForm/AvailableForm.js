import React from 'react';

import './AvailableForm.css';
import Inputs from './Inputs'
import AvailableRooms from '../AvailableRooms/AvailableRooms';

const availableForm = (props) => {

    let rooms = null;
    if(props.rooms != null) {
      rooms = <AvailableRooms rooms={props.rooms}/>;

    }

    return(
        <div className='AvailableForm'>
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
                {rooms}
                <button type='button' onClick={props.onClick}>Submit Filters</button>
            </form>
        </div>
    );
};

export default availableForm;
