import React from 'react';

const ProfileTile = (props) => {
const profile = props.profile;
  return (
    <div>
      <h3>{profile.firstName}</h3>
      <h3>{profile.lastName}</h3>
      <h3>{profile.email}</h3>
      <img src={profile.avatar}/>
    </div>
  )
}

export default ProfileTile;
