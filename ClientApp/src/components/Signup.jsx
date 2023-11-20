import React from "react"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export const Signup = () => {
    return( 
    <div className="loginform">
        <div className="loginbox">
        <div className="left">
            <img src="images/LogInCar.png" alt="loginincar" className="logincar"/>
        </div>
        <div className="right">
            <div className="d-flex flex-column align-items-center">
            <img src="images/RentalCarLogo.png" alt="logo" className="logoja" />
            <h1>SIGN UP</h1> </div>
            
            <FloatingLabel controlId="floatingInput" label="Username" className="inpt">
            <Form.Control type="username" placeholder="Your Username..." className="inp"/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Email" className="inpt">
            <Form.Control type="email" placeholder="Your Email..." className="inp"/>
            </FloatingLabel>


            
            <FloatingLabel controlId="floatingPassword" label="Password" className="inpt" >
            <Form.Control type="password" placeholder="Password" className="inp" />
            </FloatingLabel>
            
            <div className="btnsig">   
            <button className="loginbtn"><Link to='/signin' className="loginbtn">SIGN UP</Link></button>
            <div className="dont">
                <p>Alredy have an account,</p>
                <a href="/signin" >Login Here ! </a> </div> </div>
        </div>
        </div>
    </div>
  );
};
