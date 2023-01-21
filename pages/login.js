import React from "react";
import Navbar from "../Components/navbar";



    const LoginForm = () => {
        return (
            <div className="cover">
                <h1>Login</h1> 
                <input className="input1" type="text" placeholder="Username"/> 
                <input className="input2" type="password" placeholder="Password"/>
              
               <div className='login-btn'>Login</div>
                
                

               <p a href='#' className="text">Not registered yet, Register Now</p>

            </div>
        )
    }
    

export default LoginForm

