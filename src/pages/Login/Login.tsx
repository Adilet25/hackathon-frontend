import { User } from "../../modules/User";

const Login = () => {
    return ( <div>
        <h1>Login page</h1>
        <button onClick={()=>{
            const id = Math.round(Math.random() * 9);
            const user = new User();
            user.fetchUser(id)
        }}>log random user to console</button>
    </div> );
}
 
export default Login;