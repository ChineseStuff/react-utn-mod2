import React from "react";
import UserProfile from "./UserProfile";
import { users } from "../../mockData";

const UserList = () => {
  const toggleFriendship = (friendshipState, setFriendship) => {
    setFriendship({
      isFriend: !friendshipState.isFriend,
      friendshipStyle: !friendshipState.friendshipStyle
        ? "friend-style"
        : "non-friend-style"
    });
  };
  return (
    <>
      <UserProfile user={users[1]} toggleFriendship={toggleFriendship} />
      <UserProfile user={users[2]} toggleFriendship={toggleFriendship} />
    </>
  );
};

export default UserList;
