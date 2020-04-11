import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import { useHistory } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState();
  let history = useHistory();

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

  const openDetails = (user) => {
    debugger;
    history.push("/user-detail", {
      user,
      toggleFriendship,
    });
  };

  return (
    <>
      {users &&
        users.map((user) => (
          <UserProfile
            key={user.id}
            user={user}
            toggleFriendship={toggleFriendship}
            openDetails={openDetails}
          />
        ))}
    </>
  );
};

export default UserList;
