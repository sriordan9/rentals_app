import React from 'react';

import './AllAvailable.css';

const allAvailable = (props) => {
    return (
        <select className='AllAvailable' onChange={props.handleSelectedApt}
            value={props.selectedApt}> 
            <option>Please select one </option>
            {props.rooms.map((room, key) => 
                    <option 
                        key={room.id} value={room.unit_number}>
                            Unit: {room.unit_number},
                            Wheelchair: {room.wheelchair_access}, 
                            Pets: {room.pets_allowed}
                    </option>
                )
            }
        </select>
    );
    
};

export default allAvailable;