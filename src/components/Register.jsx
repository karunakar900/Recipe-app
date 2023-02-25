import React from "react";
import './register.css';
const Register = () => {





    return (
        <>
            <div className="container">
                <h2>SignUp</h2><br></br>
                <input type="text" placeholder="Email" /><br></br>
                <input type="text" placeholder="password" /><br></br>
                <input type="text" placeholder="confirmpassword" /><br></br>
                <input type="checkbox" id="check" />Agree Terms and condition<br></br>
                <button>Continue</button><br></br>
            </div>
        </>
    )
}
export default Register;