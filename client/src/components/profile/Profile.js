import React from 'react';

const Profile = (props) => {
    return (
      <div>
      <div className="">
        <h1 className="profileHeader">Profile</h1>
      </div>
        <h3 className="profileFirstName">First Name:{props.user.firstName}</h3>
        <h3 className="profileLastName">Last Name:{props.user.lastName}</h3>
        <h3 className="profileEmail">Email:{props.user.email}</h3>
        <img className="profileImage" src={props.user.avatar}/>
      </div>
    )
  }

export default Profile;
