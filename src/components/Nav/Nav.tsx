import classes from './Nav.module.scss'
import LangToggle from '../LangToggle/LangToggle';
import Search from '../Search/Search';
import Logo from "../UI/Logo/Logo";
import Burger from '../UI/Burger/Burger';
import Button from '../UI/Button/Button';

const Nav = () => {
    return ( <nav className={classes.Nav}>
        <Logo/>
        <Search/>
        <div className={classes.extraNav}>
        <LangToggle/>
        <Button>Войти</Button>
        <Button>Регистрация</Button>
        </div>
        <Burger/>
    </nav> );
}
 
export default Nav;