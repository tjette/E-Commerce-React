import React from 'react';

const Profile = (props) => {
    return (
      <div>
      <div className="">
        <h1 className="profileHeader">Profile</h1>
      </div>
        <img className="profileImage" src={props.user.avatar}/>
        <h3 className="profileFirstName">Name:{props.user.firstName} {props.user.lastName}</h3>
        <h3 className="profileEmail">Email:{props.user.email}</h3>

      </div>
    )
  }

export default Profile;
