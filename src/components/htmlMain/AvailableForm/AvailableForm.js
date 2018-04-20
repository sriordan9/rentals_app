import React from 'react';

import './AvailableForm.css';
import Inputs from './Inputs'
import AvailableRooms from './AvailableRooms/AvailableRooms';
import AllAvailable from './AllAvailable/AllAvailable';
import NoRooms from './NoRooms/NoRooms';

const availableForm = (props) => {

    let rooms = null;
    if(props.rooms != null) {       // If state has been updated with db values then proceed

        if(typeof(props.rooms[0].unit_number) === 'string') { // If the unit number is a string, then array was originally 
            rooms = <NoRooms rooms={props.rooms} />;         // empty & the string "no matches found" was sent instead

        } else if(props.rooms[0].bathrooms) {  // If data includes bathrooms then user chose the filtered search
            rooms = <AvailableRooms rooms={props.rooms}/>;

        } else {    // If data doesn't include bathrooms, user did not filter apt results
            rooms = <AllAvailable rooms={props.rooms}/>;
        }
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
                <div className='btnContainer'>
                    <button type='button' onClick={props.clickSubmitFiltered}>Submit Filters</button>
                    <button type='button' onClick={props.clickAllAvail}>All Available</button>
                </div>
            </form>
        </div>
    );
};

export default availableForm;
