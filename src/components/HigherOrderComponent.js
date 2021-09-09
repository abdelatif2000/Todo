import React, { Component } from 'react';
import axios from 'axios';


const HigherOrderComponent=(OriginComponent)=>{
  
     return (
        class newComponent extends Component {
            constructor(){
                super();
                axios.get(this.state.url).then((response)=>{
                    this.setState({
                       users:response.data
                    })
                    console.log(this.state.users);
                 }).catch(error_=>console.log(error_));
            }
            state={
                url:"https://jsonplaceholder.typicode.com/users",
                users:[]
               }
            render() {
                return  ( <div>
                 <OriginComponent 
                    url={this.state.users}
                    users={this.state.users}
                     {...this.props}

                  />
                </div> 
                  )
            }
        }
     )
}
export default HigherOrderComponent;
