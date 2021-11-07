import React from 'react';

const PersonCardDetails = (props) => {
    return (
 <>
    <div className="image">
      <img src={props.image} alt="avatar"/>
    </div>
    <div className="content">
      <div className="header">{props.name}</div>
      <div className="meta">
        <a>Friends</a>
      </div>
      <div className="description">
        {props.firstName} title is {props.workTitle}
      </div>
      <div className="description">
        Currently working at {props.companyName} in {props.city}
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Joined in {props.joined}
      </span>
      <span>
        <i className="user icon"></i>
        75 Friends
      </span>
    </div>
  </>

    );
}

export default PersonCardDetails;