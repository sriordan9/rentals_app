import React from 'react';
import AvailableForm from '../AvailableForm/AvailableForm';

import './Home.css';

const home = (props) => {
  return (
      <div className="Home">
          <h2>Please see our apartment selection below!</h2>
          <p>(Must be logged in to reserve)</p>
          <AvailableForm inputs={props.inputs} 
            rooms={props.rooms}
            onChange={props.onChange}
            clickSubmitFiltered={props.clickSubmitFiltered}
            clickAllAvail={props.clickAllAvail}
            handleSelectedApt={props.handleSelectedApt}
            handleReserveApt={props.handleReserveApt}
            selectedApt={props.selectedApt}
            selectedRadio={props.selectedRadio}
            handleSelectRadio={props.handleSelectRadio} 
            />
      </div>
  );
};

export default home;