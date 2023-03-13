import {NavLink} from 'react-router-dom'
import Logo from "../UI/Logo/Logo";

const Nav = () => {
    return ( <nav>
        <Logo/>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
            </li>
        </ul>
    </nav> );
}
 
export default Nav;