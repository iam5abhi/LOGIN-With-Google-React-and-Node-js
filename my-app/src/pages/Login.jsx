import React from "react";
import Google  from '../img/28-288899_free-icons-png-google-plus-logo-2017-clipart.png'
import FaceBook from '../img/download.png'
import { GoogleLogin } from 'react-google-login';

const Login =()=>{
     const google =()=>{
        window.open("http://localhost:5000/auth/google", "_self");
     }

    return(
        <div>
         <h1 className="logintitle">Choose The Login Method</h1>
        <div className="login">
            <div className="wrapper">
                <div className="left">
                    <div className="logiButton">
                    <img src={Google} alt="" className="Logo" onClick={google} />
                        google
                    </div>
                </div>
                <div className="center">
                    <div className="line">
                        <div className="or">OR</div>
                    </div>
                </div>
                <div className="right">
                    <input type="email" name="email" placeholder="Enter Your Email" />
                    <input type="password" name="password" placeholder="Enter your password" />
                      <button type="submit" className="loginButton">Login</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login