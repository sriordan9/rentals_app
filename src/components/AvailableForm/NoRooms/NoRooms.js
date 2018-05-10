import React from 'react';

import './NoRooms.css';

const noRooms = (props) => {
        return(
            <select className='NoRooms'> 
                <option key={props.rooms[0].id}>
                    {props.rooms[0].unit_number}
                </option>
            </select>
        );
};

export default noRooms;