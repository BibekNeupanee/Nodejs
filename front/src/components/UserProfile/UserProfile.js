import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

function UserProfile() {
  const [user, setUser] = useLocalStorage("user", {});

  return (
    <div>
      <div className="welcmome">Welcome, {user.name}</div>
      <div className="change-password">
        <a href="/">Change Password</a> 
      </div>
    </div>
  );
}

export default UserProfile;
