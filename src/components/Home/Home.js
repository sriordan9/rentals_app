import React from 'react';
import MainImage from './../images/Image';
import AvailableForm from '../AvailableForm/AvailableForm';

const home = (props) => {
  return (
      <div>
          <MainImage />
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