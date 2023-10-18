import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import "./style.css";
import logo60 from "./img/icon-60.png";
import MenuButton from "../MenuButton";
import { authContext } from "../../context/authContext";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(authContext);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <Link className="navbar__link" to="/">
            <img src={logo60} alt="logo" />
            <span>Ani</span>Slime
          </Link>
          <Link className="navbar__link" to="/anime-list">
            Жанр
          </Link>
        </div>
        <div className="navbar__right">
          <TextField
            className="navbar__textField"
            id="filled-basic"
            label="Поиск"
            variant="filled"
          />
          {currentUser ? (
            <MenuButton />
          ) : (
            <Button
              variant="contained"
              className="sign-up__btn"
              onClick={() => navigate("/sign-up")}
            >
              Зарегистрироваться
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
