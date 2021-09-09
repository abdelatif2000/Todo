import React  from 'react'
import axios from 'axios';
import  { Component } from 'react';
import {UserRegester,GetTasks} from './components/API/data';
import NewUser from './components/API/NewUser';
import Login from './components/Login'
import { BrowserRouter,   Switch,Route, Link   } from "react-router-dom";
import Todos from './components/Todos';
import AddTask from './components/AddTask';

  
  class App extends Component {
     render() {
        return (
          
           <div>
               <BrowserRouter>

                   <Route exact path="/NewUser"  >
                        <NewUser/> 
                   </Route> 
                   <Route exact path="/" >
                     {sessionStorage.getItem("token")==null ? <Login/> : <Todos/> } 
                   </Route> 
                   <Route exact path="/Todos" >
                     {sessionStorage.getItem("token")==null ? <Login/> : <Todos/> } 
                   </Route> 

                   <Route exact path="/Login" >
                      <Login/> 
                   </Route> 

                   <Route exact path="/addtask"  >
                     {sessionStorage.getItem("token")==null ? <Login/> : <AddTask/> } 
                   </Route>

               </BrowserRouter>
           </div>
        )
     }
  }
  export default App
