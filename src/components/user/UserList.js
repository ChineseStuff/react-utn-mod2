import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";

const UserList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/ChineseStuff/db-json-server/users/"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
        },
        (error) => {
          console.log("Error");
        }
      );
  }, []);

  const toggleFriendship = (e, user) => {
    if (!e) e = window.event;
    user.isFriend = !user.isFriend;
    setUsers(users.map((_user) => (_user.id === user.id ? user : _user)));
    e.stopPropagation();
  };

  return (
    <>
      {users &&
        users.map((user) => (
          <UserProfile
            key={user.id}
            user={user}
            toggleFriendship={toggleFriendship}
          />
        ))}
    </>
  );
};

export default UserList;
