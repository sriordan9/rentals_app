import React from 'react';

import './AvailableRooms.css';

const availableRooms = (props) => {
    return (
        <div> 
            {props.rooms.map((room, key) =>
            
                <ul key={room.id}>
                    <li>{room.floor_level}</li>
                    <li>{room.unit_number}</li>
                    <li>{room.parent_id}</li>
                </ul>
                )
            }
        </div>
    ); //id's from the tables are not unique...create a key column or key making function
};

// const availableRooms = (props) => {
//     return (
//         <div>
//             {props.rooms.map((room, index) => 
//                <p index={room.key}>{room.id}</p>
//             )}
//         </div>
//     );
// };

export default availableRooms;