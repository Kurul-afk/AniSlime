import { Button, Menu, MenuItem } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import "./style.css";

const MenuButton = () => {
  const { handleSignOut } = useContext(authContext);

  const [currentUser, setCurrentUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSubmit = () => {
    setAnchorEl(null);
    navigate("/user-profile");
  };

  const handleCloseForSignOut = () => {
    setAnchorEl(null);
    handleSignOut();
    navigate("/sign-up");
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className="menu__btn"
        onClick={handleClick}
      >
        Профиль
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleSubmit}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <span className="menu__down_text" style={{ padding: "0 1rem" }}>
          {currentUser}
        </span>
        <MenuItem className="menu__down_btn" onClick={handleSubmit}>
          Мой Аккаунт
        </MenuItem>
        <MenuItem className="menu__down_btn" onClick={handleCloseForSignOut}>
          Выйти
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
