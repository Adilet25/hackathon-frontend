import classes from './Nav.module.scss'
import LangToggle from '../LangToggle/LangToggle';
import Search from '../Search/Search';
import Logo from "../UI/Logo/Logo";
import Burger from '../UI/Burger/Burger';
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()

    return ( <nav className={classes.Nav}>
        <Logo/>
        <Search/>
        <div className={classes.extraNav}>
        <LangToggle/>
        {/* <TestButton onClick={() => navigate('/')}>Войти</TestButton> */}
        <button onClick={() => navigate('/login')}>Войти</button>
        {/* <TestButton>Регистрация</TestButton> */}
        <button onClick={() => navigate('/register')}>Регистрация</button>
        </div>
        <Burger/>
    </nav> );
}
 
export default Nav;