import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import {UpdateTask,UpdateTask_completed,SetTask,GetTasks,DeleteTask} from   './API/data';



export default class Todos extends Component {
    state={
        AllTasks:[],
        show:false,
        description:"",
        completed: false,
        updateShow:false,
         _id:0
    }
    hadlineChnage=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
          
    }
    hidlinesubmit=(e)=>{
        SetTask(this.state).then(()=>{
            this.componentDidMount();
            this.setState({show: !this.state.show});
        })
     }
    componentDidMount() {
        GetTasks().then(e=>this.setState({AllTasks:e.data.data})).then(e=>console.log(this.state.AllTasks));
    }
    closeModal=()=>{
        this.setState({show: ! this.state.show});
    }
    closeModalUpdate=()=>{
        this.setState({updateShow: ! this.state.updateShow})
    }
    deleteToDo=(response)=>{
        DeleteTask(response).then(()=>{
            this.componentDidMount();
        });
    }
    saveChange=()=>{
        UpdateTask(this.state).then(e=>{
            this.componentDidMount();
            this.setState({
                updateShow:false
            })
        })
    }
    Completed_(){
           UpdateTask_completed(this.state).then(()=>{
                this.componentDidMount();
            })
    }
  
    render() {
        return (
            
            <div> 
                {this.state.AllTasks.length===0 &&  <h1 id='empty'>Add New Task</h1>}
                 <input onClick={()=>this.setState({show:true})}  type="submit" className='btn_add' style={{float:'right', margin:"10px 10px 10px 0",    padding: "10px 9px"}} value='New Task' />
                 <input onClick={()=> {
                     sessionStorage.removeItem("token");
                     window.location.replace("/");
                 }}  type="submit" className='btn_add' style={{float:'right', margin:"10px 10px 10px 0",padding: "10px 9px"}} value='Logout' />
                 <Modal show={this.state.show} onHide={this.closeModal} >
                     <Modal.Header closeButton>
                        <Modal.Title className='title_add'>Add New Task :</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                         <textarea placeholder="Description" style={{color:"green"}} onChange={this.hadlineChnage} name='description'>

                         </textarea>
                       
                     </Modal.Body>
                     <Modal.Footer>
                         <input type='button' value='Close' className='btn btn-danger' onClick={this.closeModal}/>
                         <input type='button' value='save'className='btn btn-success'  onClick={this.hidlinesubmit} />
                     </Modal.Footer>
                 </Modal>

                 <Modal show={this.state.updateShow} onHide={this.closeModalUpdate} >
                     <Modal.Header closeButton>
                        <Modal.Title className='title_add'>Update Task :</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                         <textarea id='textarea_description' value={this.state.description}  style={{color:"green"}} onChange={this.hadlineChnage} name='description' >

                         </textarea>
                     </Modal.Body>
                     <Modal.Footer>
                         <input type='button' value='Close' className='btn btn-danger' onClick={this.closeModalUpdate}/>
                         <input type='button' value='save'className='btn btn-success'  onClick={this.saveChange} />
                     </Modal.Footer>
                 </Modal>
            <table>
               <thead>
               <tr>
                   <th scope="col" style={{width: "15px"}}>Index</th>
                   <th scope="col">Description</th>
                   <th scope="col">Created At</th>
                   <th scope="col"  style={{ width: "99px"}}>Statud</th>
                   <th scope="col" >Actions</th>
               </tr>
               </thead>
               <tbody>
                     {this.state.AllTasks.map((item,index)=>{
                         return (
                           <tr key={index}>
                           <td data-label="Index :"  >{index}</td>
                           <td data-label="Description :">{item.description}</td>
                           <td data-label="Created At :">{item.createdAt}</td>
                           <td  data-label="Status :">{item.completed.toString()}</td>
                           <td data-label="Actions :"><button type="submit"  className="btn btn-danger" onClick={()=>this.deleteToDo(item._id) } >Delete</button>
                            {" "}
                           <button onClick={()=>{
                                  this.setState({updateShow:true,_id:item._id,description:item.description});
                           }
                           }  type="button" className="btn btn-primary" update>Update</button> {" "}
                           <button onClick={()=>{
                               this.setState({_id:item._id});
                               this.Completed_();
                           }} className="btn  btn-success">Mark {(! item.completed).toString()}</button>
                           </td>
                           </tr>
                         )
                     })}
               </tbody>
         </table>
            </div>
          
        )
    }
}
