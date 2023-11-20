import React from "react"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const Login = () => {
    return( 
    <div className="loginform">
        <div className="loginbox">
        <div className="left">
            <img src="images/LogInCar.png" alt="loginincar" className="logincar"/>
        </div>
        <div className="right">
            <h1>WELCOME</h1>
            <FloatingLabel controlId="floatingInput" label="Username" className="inpt">
            <Form.Control type="username" placeholder="Your Username..." className="inp"/>
            </FloatingLabel>
            <div>
                <FloatingLabel controlId="floatingPassword" label="Password" >
                <Form.Control type="password" placeholder="Password" className="inp" />
                </FloatingLabel>
                <a href="" className="forgot">Forgot Your Password</a> </div>
                <button>LOG IN</button>
                <div className="dont">
                <p>Don't have an account,</p>
                <a href="" >Create here ! </a> </div>
            </div>
        </div>
    </div>
  );
};
