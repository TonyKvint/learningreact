import React from 'react';
import logo from "../../img/logo.png"; // "../" означает "выйти на уровень выше"
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt={"logo"}></img>
    </header>
  );
};

export default Header;
