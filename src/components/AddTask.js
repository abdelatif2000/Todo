import React, { Component } from 'react';
import  {SetTask} from './API/data';

export default class AddTask extends Component {
    state={
        description:""
    }
 
    hidlinesubmit=(e)=>{
        e.preventDefault();
        SetTask(this.state);
     }
     hadlineChnage=(e)=>{
         this.setState({
             description: e.target.value
         })
     }
    render() {
        return (
            <div>
                    <form className="box" id="addtaskform" onSubmit={this.hidlinesubmit} >
                        <h1>Add New Task </h1>
                        <input type="text" id="addtasktext"   onChange={this.hadlineChnage} name="addtask" placeholder="Enter Your Task" />
                      
                    </form>
            </div>
        )
    }
}
