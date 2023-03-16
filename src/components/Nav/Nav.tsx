import classes from './Nav.module.scss'
import LangToggle from '../LangToggle/LangToggle';
import Search from '../Search/Search';
import Logo from "../UI/Logo/Logo";
import TestButton from '../UI/Logo/TestButton';
import Burger from '../UI/Burger/Burger';

const Nav = () => {
    return ( <nav className={classes.Nav}>
        <Logo/>
        <Search/>
        <div className={classes.extraNav}>
        <LangToggle/>
        <TestButton>Войти</TestButton>
        <TestButton>Регистрация</TestButton>
        </div>
        <Burger/>
    </nav> );
}
 
export default Nav;