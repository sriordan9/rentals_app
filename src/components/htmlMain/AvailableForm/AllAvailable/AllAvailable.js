import React from 'react';

import './AllAvailable.css';

const allAvailable = (props) => {
    return (
        <select className='AllAvailable'> 
            {props.rooms.map((room, key) =>
                
                <option key={room.id}>
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