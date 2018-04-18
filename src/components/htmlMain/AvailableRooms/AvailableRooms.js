import React from 'react';

import './AvailableRooms.css';

const availableRooms = (props) => {
    return (
        <select className='AvailableRooms'> 
            {props.rooms.map((room, key) =>
                
                <option key={room.id}>
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