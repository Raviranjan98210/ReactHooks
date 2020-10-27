import React from "react";
import useResourceList from "./useResourceList";

const UserList = () => {
  const users = useResourceList("users");

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
