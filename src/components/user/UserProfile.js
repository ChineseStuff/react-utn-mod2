import React from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfile = ({ user, toggleFriendship }) => {
  return (
    <div className='profile-wrapper'>
      <div className='profile-card'>
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
          {user.isFriend && <p className='friendship'>Es mi amigx!</p>}
          <FontAwesomeIcon
            icon={["fas", "user-plus"]}
            transform='shrink-8 up-.5'
            mask={["fas", "circle"]}
            className={user.isFriend ? "friend-style" : "non-friend-style"}
            size='3x'
            onClick={() => toggleFriendship(user)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
