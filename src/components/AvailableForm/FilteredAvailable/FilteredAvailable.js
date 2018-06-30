import React from 'react';

import './FilteredAvailable.css';

const availableRooms = (props) => {
    return (
        <select className='FilteredAvailable' onChange={props.handleSelectedApt}
        value={props.selectedApt}>
            <option>Please select one </option> 
            {props.rooms.map((room, key) =>
                
                <option key={room.id} value={room.unit_number}>
                    Unit: {room.unit_number},
                    Floor: {room.floor_level}, 
                    Bathrooms: {room.bathrooms}
                </option>
                )
            }
        </select>
    );
};

export default availableRooms;