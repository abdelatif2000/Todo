import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Alert } from 'react-bootstrap';
import { BrowserRouter,Redirect ,  Switch,Route, Link} from "react-router-dom";

const url="https://api-nodejs-todolist.herokuapp.com/user/register";
const UserRegester =(name,email,password,age)=>{
   
      axios.post(url,{
        "name": name,
        "email": email,
        "password": password,
        "age": age
    }).then(e=>{
       console.log(e);
       window.location.replace("/Login");
  
    })
    .catch(e=>{
       if(e.response.data.startsWith("E11000")){ 
          alert("this email is enrady use please enter anather email");
    }});  
}
const UserLogin=(state)=>{
       const url="https://api-nodejs-todolist.herokuapp.com/user/login";
       axios.post(url,state).then(e=>{
          sessionStorage.setItem("token",e.data.token);
          window.location.replace("/todos");
          console.log(e);
       }).catch(e=>{
         if(e.response.data.startsWith("Unable to login")) alert("your password or email not correct !!");
      }
       );
}
 const user= `Bearer ${sessionStorage.getItem("token")}`;
 const config={
     headers:{Authorization :user}
 }

   async function  GetTasks(){
    const url=  "https://api-nodejs-todolist.herokuapp.com/task";
    const data=await axios.get(url,config);
   return data;
}
async function SetTask(data){
  const url="https://api-nodejs-todolist.herokuapp.com/task";
      const response=await axios.post(url,{"description":data.description},config);
      return response;
}
async function  DeleteTask (id){
 const  url=`https://api-nodejs-todolist.herokuapp.com/task/${id}`;
           const data=await axios.delete(url,config);
           return data;
}
async function  UpdateTask (id){
   const  url=`https://api-nodejs-todolist.herokuapp.com/task/${id._id}`;
             const  data =await axios.put(url,{
                  "description" :id.description
                 },config
                 );
             return data;
  }
  async function  UpdateTask_completed (id){
   const  url=`https://api-nodejs-todolist.herokuapp.com/task/${id._id}`;
              const data=await axios.put(url,{
                  "completed" : ! "completed"
                 },config
                 );
             return data;
  }
  

export {UserRegester,UserLogin,GetTasks,SetTask,DeleteTask,UpdateTask,UpdateTask_completed} 