import React from "react"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export const Login = () => {
    return( 
    <div className="loginform">
        <div className="loginbox">
        <div className="left">
            <img src="images/LogInCar.png" alt="loginincar" className="logincar"/>
        </div>
        <div className="right">
            <div className="d-flex flex-column align-items-center">
            <img src="images/RentalCarLogo.png" alt="logo" className="logoja" />
            <h1>WELCOME</h1></div>
            <FloatingLabel controlId="floatingInput" label="Username" className="inpt">
            <Form.Control type="username" placeholder="Your Username..." className="inp"/>
            </FloatingLabel>
            <div className="pwbox">
                <FloatingLabel controlId="floatingPassword" label="Password" className="inpt" >
                <Form.Control type="password" placeholder="Password" className="inp" />
                </FloatingLabel>
                <a href="/" className="forgot">Forgot Your Password</a> </div>
                <div className="logdont btnsig">
                <button className="loginbtn"><Link to='/' className="loginbtn">LOGIN</Link></button>
                <div className="dont">
                <p>Don't have an account,</p>
                <a href="/signup" >Create here ! </a> </div></div>
            </div>
        </div>
    </div>
  );
};
