import {FC} from 'react';

interface TestButtonProps {
    children: any;
}
 
const TestButton: FC<TestButtonProps> = ({children}) => {
    return ( <button style={{height: "40px", padding: "0 20px"}}>
    {children}
    </button> );
}
 
export default TestButton;