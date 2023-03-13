import {FC} from 'react';
import Nav from '../Nav/Nav';

interface LayoutProps {
    children: any;
}
 
const Layout: FC<LayoutProps> = ({children}) => {
    return ( <>
    <Nav/>
    {children}
    </> );
}
 
export default Layout;