import classes from "./Nav.module.scss";
import LangToggle from "../LangToggle/LangToggle";
import Search from "../Search/Search";
import Logo from "../UI/Logo/Logo";
import Burger from "../UI/Burger/Burger";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className={classes.Nav}>
      <div onClick={() => navigate("/")}>
        <Logo />
      </div>
      <Search />
      <div className={classes.extraNav}>
        <LangToggle />
        {/* <TestButton onClick={() => navigate('/')}>Войти</TestButton> */}
        <button
          onClick={() => navigate("/login")}
          className="text-white bg-ourLemonGreen rounded-3xl px-8 py-3">
          Войти
        </button>
        {/* <TestButton>Регистрация</TestButton> */}
        <button
          onClick={() => navigate("/register")}
          className="text-white bg-ourLemonGreen rounded-3xl px-8 py-3">
          Регистрация
        </button>
      </div>
      <Burger />
    </nav>
  );
};

export default Nav;
