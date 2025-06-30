import React from 'react'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name:"Dummy",
                location:"delhi",
                avatar_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzat17SHC7RVKPiLm_xWFUfMT2DX-Ybn0LQ&s"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/kedarsai-1");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
        
    }
    render (){
    
    const {name,location,avatar_url} = this.state.userInfo;
    
        return(
            <div className="user-card flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-2xl p-6 space-y-4 md:space-y-0 md:space-x-6 max-w-2xl mx-auto">
            <img
              src={avatar_url}
              alt="User Avatar"
              className="rounded-xl w-40 h-40 object-cover shadow-2xl"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              <h3 className="text-lg text-gray-600 mt-1">📍 {location}</h3>
              <h4 className="text-md text-gray-500 mt-2">📧 saikedar2003@gmail.com</h4>
            </div>
          </div>
          
        )
    }
 }
 export default UserClass;