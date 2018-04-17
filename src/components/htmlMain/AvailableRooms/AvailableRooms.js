import React from 'react';

import './AvailableRooms.css';

const availableRooms = (props) => {
    return (
        <select className='Rooms_ul'> 
            {props.rooms.map((room, key) =>
                // <ul key={room.id}>
                //     <li>{room.floor_level}</li>
                //     <li>{room.unit_number}</li>
                //     <li>{room.parent_id}</li>
                // </ul>
                <option key={room.id}>
                    Floor level: {room.floor_level}, 
                    Unit number: {room.unit_number},
                    Random number: {Math.floor(Math.random() * 20)}
                </option>
                )
            }
        </select>
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