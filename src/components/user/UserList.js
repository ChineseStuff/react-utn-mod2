import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import { usersData } from "../../mockData";

const UserList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const toggleFriendship = user => {
    user.isFriend = !user.isFriend;
    setUsers(users.map(_user => (_user.id === user.id ? user : _user)));
  };

  return (
    <>
      {users &&
        users.map(user => (
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
