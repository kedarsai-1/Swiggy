import User from './User';
import React from 'react';
import UserClass from './UserClass';
class About extends React.Component{
    constructor(props){
        super(props);
            console.log("parent Constructor");
            
        }
        componentDidMount(){
            console.log("PARENT");
            
        }
    
    render(){
        return(
            <div>
                <h1>About</h1>
            <h2>This is about page</h2>
            <UserClass name ={"sai"}/>

            </div>
        )
    }
}
  
export default About