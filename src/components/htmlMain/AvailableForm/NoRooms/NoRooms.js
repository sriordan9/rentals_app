import React from 'react';

const noRooms = (props) => {
        return(
            <select className='AvailableRooms'> 
                <option key={props.rooms[0].id}>
                    {props.rooms[0].unit_number}
                </option>
            </select>
        );
};

export default noRooms;