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
            />
      </div>
  );
};

export default home;