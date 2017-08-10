import React from 'react';

const Profile = (props) => {
  return (
    <div>
    <h3>{props.user.firstName}</h3>
    <h3>{props.user.lastName}</h3>
    <h3>{props.user.email}</h3>
    <img src={props.user.avatar}/>
    </div>
  )
}

export default Profile;