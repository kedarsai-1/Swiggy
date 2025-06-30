import User from './User';
import React from 'react';
import UserClass from './UserClass';
class About extends React.Component{
    constructor(props){
        super(props);
            console.log("parent Constructor");
            
        }
       async componentDidMount(){
            const data = await fetch("https://api.github.com/users/kedarsai-1");
            const json = await data.json();
            console.log(json);
            this.setState({
                userInfo:json,
            })
            
        }
    
    render(){
        return (
            <div className="bg-amber-200 min-h-screen p-6">
              <h1 className="text-center font-bold text-4xl text-gray-800 mb-4">About</h1>
              <h2 className="text-center font-bold text-xl text-gray-700 mb-8">Kedar Sai Nannapaneni</h2>
          
              <div className="flex justify-center">
                <UserClass />
              </div>
            </div>
          );
          
    }
}
  
export default About