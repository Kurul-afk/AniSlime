import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, colors } from "@mui/material";
import './style.css'

const Navbar = () => {

  const navigate = useNavigate()
  
  return (
  <div className="navbar">
    <div className="navbar__container">
      <div className="navbar__left">
        <Link className="navbar__link" to="/">Главная</Link>
        <Link className="navbar__link" to="/anime-list">Жанр</Link>
      </div>
      <div className="navbar__right">
        <TextField className="navbar__textField" id="filled-basic" label="Поиск" variant="filled" />
        <Button variant="contained" color='success' onClick={()=> navigate('/sign-up')}>Primary</Button>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
