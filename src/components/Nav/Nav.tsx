import classes from "./Nav.module.scss";
import LangToggle from "../LangToggle/LangToggle";
import Search from "../Search/Search";
import Logo from "../UI/Logo/Logo";
import Burger from "../UI/Burger/Burger";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const { logout, user, checkAuth } = useAuth();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <nav className={classes.Nav}>
      <div onClick={() => navigate("/")}>
        <Logo />
      </div>
      <Search />
      <div className={classes.extraNav}>
        <LangToggle />
        {/* <TestButton onClick={() => navigate('/')}>Войти</TestButton> */}
        <button onClick={() => navigate("/login")} className="">
          Войти
        </button>
        {/* <TestButton>Регистрация</TestButton> */}
        <button onClick={() => navigate("/register")} className="">
          Регистрация
        </button>
      </div>
      <Burger />
    </nav>
  );
};

export default Nav;
