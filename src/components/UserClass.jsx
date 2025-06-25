import React from 'react'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        console.log("children");
        this.state={
            count:0,
            
        };
       

    }
    componentDidMount(){
        console.log("children mounted");
        
    }
    render (){
    const {count}= this.state;
    
        return(
            <div className="user-card">
            <h2>{this.props.name}</h2>
            <h3>count:{count}</h3>
            <button  onClick={()=>{
this.setState({count:this.state.count+1});
            }}>increase</button>
            <h3>Location: Guntur</h3>
            <h4>Contact: saikedar2003@gmail.com  </h4>

        </div>
        )
    }
 }
 export default UserClass;