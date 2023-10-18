import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";

// Страница пользователя

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  }, []);

  return (
    <div className="profile">
      <div className="profile__container">
        <Avatar sx={{ width: 160, height: 160 }} src="/broken-image.jpg" />
        <div className="profile__left_desc">
          <h3 className="profile__name">{currentUser}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
