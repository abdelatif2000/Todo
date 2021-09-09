import React from 'react';
import axios from 'axios';
import  { Component } from 'react';
import '../style/Login.css';
import {UserLogin} from './API/data';
import { BrowserRouter,   Switch,Route, Link   } from "react-router-dom";


 class Login extends Component {
      state={
          email:"",
          password:""
    }
    hadlineChnage=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    hidlinesubmit=(e)=>{
        e.preventDefault();
        UserLogin(this.state);
       e.target.elements[0].value="";
       e.target.elements[1].value="";
    }
    render() {
        return (
            <div>
                   <form className="box" onSubmit={this.hidlinesubmit} >
                        <h1>Login </h1>
                        <input type="email" onChange={this.hadlineChnage} name="email" placeholder="Enter Your Email" />
                        <input type="password" onChange={this.hadlineChnage} name="password" placeholder="Enter Your Password " />
                        <input type="submit" value="Login" />
                        <p style={{color:'white'}}>Create An New Account <Link to="/NewUser">SignIn</Link></p>
                    </form>
            </div>
        )
    }
}
export default Login;

