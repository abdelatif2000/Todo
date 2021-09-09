import React, { Component } from 'react';
import { Button,Form,Alert } from 'react-bootstrap';
import   {UserRegester}  from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,   Switch,Route, Link   } from "react-router-dom";


export default class NewUser extends Component {
      state={
          name:'',
          password:'',
          age:0,
          email :''
      }
    onsubmit=(e)=>{
       e.preventDefault();
       UserRegester(this.state.name,this.state.email,this.state.password,this.state.age);
       console.log(this.state.pass)
    }
    render() {
        return (
            <div style={{background:"black"}}>
               
                  <form onSubmit={this.onsubmit} className="box">
                        <div className="mb-3">
                        <input name='ID' required onChange={(e)=>{this.setState({name:e.target.value})}}  type="text" placeholder='Enter Your Name' className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3">
                        <input name='' required onChange={(e)=>{this.setState({email:e.target.value})}} type="email" className="form-control" placeholder='Enter Your Email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>

                        <div className="mb-3">
                        <input name=''  required onChange={(e)=>{this.setState({age:e.target.value})}} type="number" className="form-control" placeholder='Enter Your Age' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        
                        <div className="mb-3">
                        <input name='' required onChange={(e)=>{this.setState({password:e.target.value})}} type="password" className="form-control" placeholder='Enter Your PassWord' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <input type="submit" value="Submit" />
                        <p style={{color:'white'}}>I Have An Account <Link to="/Login">Login</Link></p>
                 </form>
            


            </div>
        )
    }
}
