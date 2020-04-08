import React from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfile = ({ user, toggleFriendship, openDetails }) => {
  let imageWrappedStyleClass = "profile-photo";
  if (user.isFriend) imageWrappedStyleClass += " border-orange";
  return (
    <div className='thumbnail-container' onClick={() => openDetails(user)}>
      <div
        className={imageWrappedStyleClass}
        style={{
          backgroundImage: "url('" + user.profileImage + "')",
        }}
      ></div>
      <div className='content'>
        <div className='content-text'>
          <div className='name-text'>
            <h3>{user.name}</h3>
            <h6>{user.address.city}</h6>
          </div>
          {user.isFriend && <p className='friendship'>Es mi amigx!</p>}
        </div>
        <FontAwesomeIcon
          id='fai'
          icon={["fas", "user-plus"]}
          transform='shrink-8 up-.5'
          mask={["fas", "circle"]}
          className={user.isFriend ? "friend-style" : "non-friend-style"}
          size='4x'
          onClick={(e) => toggleFriendship(e, user)}
        />
      </div>
    </div>
  );
};

export default UserProfile;
