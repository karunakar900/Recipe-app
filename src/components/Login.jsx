import React from "react";
import './login.css';
const Login = () => {



    return (
        <>
            <div className="main">
                <h1>Sign In</h1>
                <input type="text" placeholder="Email" /><br></br>
                <input type="password" placeholder="password" /><br></br>
                <input type="checkbox" id="check1" /><strong>Remember me</strong><br></br>
                <button>Submit</button>
            </div>
        </>
    )
}
export default Login;