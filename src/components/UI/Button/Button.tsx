import {FC} from 'react';
import classes from './Button.module.scss'
interface ButtonProps {
    children: any;
}
 
const Button: FC<ButtonProps> = ({children}) => {
    return ( <button className={classes.Button}>
    {children}
    </button> );
}
 
export default Button;