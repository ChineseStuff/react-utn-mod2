import React from "react";
import "./user.css";

const UserProfile = props => {
  const user = {
    fullName: "Ricardito Tamal",
    city: "estulapio",
    profileImage: "https://i.imgur.com/gQL6Dg4.jpg"
  };
  return (
    <div className='profile-wrapper'>
      <div className='left-side'>
        <div className='panel-info'>
          <h3>Informacion</h3>
          <div className='inf'>
            <div className='item'>
              <h4>Nombre</h4>
              <p>{user.fullName}</p>
            </div>
            <div className='item'>
              <h4>Ciudad</h4>
              <p>{user.city}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='right-side'>
        <img alt='user' src={user.profileImage}></img>
        <h4>{user.fullName}</h4>
      </div>
    </div>
  );
};

export default UserProfile;
