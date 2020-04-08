import React, { useEffect, useState } from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfileDetail = ({ toggleFriendship, ...props }) => {
  let userId = props.match.params.userId;
  let [user, setUser] = useState();

  useEffect(() => {
    console.log(userId);
    fetch(
      "https://my-json-server.typicode.com/ChineseStuff/db-json-server/users/" +
        userId
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setUser(result);
        },
        (error) => {
          console.log("Error");
        }
      );
  }, [userId]);

  return (
    <>
      {user && (
        <div className='profile-wrapper'>
          <div className='profile-card'>
            <div className='left-side'>
              <div className='panel-info'>
                <h3>Informacion</h3>
                <div className='inf'>
                  <div className='item'>
                    <h4>Nombre</h4>
                    <p>{user.name}</p>
                  </div>
                  <div className='item'>
                    <h4>Ciudad</h4>
                    <p>{user.address.city}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='right-side'>
              <div
                className='image-profile'
                style={{
                  backgroundImage: "url('" + user.profileImage + "')",
                }}
              ></div>
              <h4>{user.name}</h4>
              {user.isFriend && <p className='friendship'>Es mi amigx!</p>}
              <FontAwesomeIcon
                id='fai'
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
      )}
    </>
  );
};

export default UserProfileDetail;
