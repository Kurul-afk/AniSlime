import { Button, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuButton = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Профиль
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>{currentUser}</MenuItem>
        <MenuItem onClick={handleClose}>Мой Аккаунт</MenuItem>
        <MenuItem onClick={handleClose}>Выйти</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
