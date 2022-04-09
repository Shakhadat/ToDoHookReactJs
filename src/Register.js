import React from "react";
import {Link} from"react-router-dom"
import './App.css'
const admins=[
    {
    username:"shahodat",
    password:123
},
{
    username:"lola",
    password:123
},
{
    username:"Kumush",
    password:123
}

];

class Register extends React.Component{
    constructor(props){
        super(props);

        
        this.state={
            users:[],
            entruser:{
                username:"",
                password:""
            },
            test:false
        
        }
    }
    inputHandle=(e)=>{
       const entruser=Object.assign({},this.state.entruser);;
       entruser[e.target.name]=e.target.value;
       this.setState({entruser:entruser});
     
            
        
        //    ((e.target.name)=="username" && e.target.value!=="")?this.setState({entruser:{username:e.target.value}}):console.log("Username kiritilmadi!");
        
        
        //     (((e.target.name)=="password") && e.target.value!=="")?this.setState({entruser:{password:e.target.value}}):console.log("Password kiritilmadi!");
        
        
       
    }
   
    onSubmit=(e)=>{


        e.preventDefault();
        console.log("res", this.state.entruser.password, this.state.entruser.username)
        if(this.state.entruser.username!=="" && this.state.entruser.password!==""){

            const users=[...this.state.users, {title:this.state.entruser.username, password:this.state.entruser.password, id:Math.random().toString()}];
            this.setState({users:users, entruser:{username:'', password:''}})
            console.log(users);
            this.setState({test:true})


                // }
            // })
        }
    };

    render(){
        console.log('state',this.state.entruser)
        console.log("test", this.state.test)
        return(
            <>
            <h1>Log in:</h1>
             <form onSubmit={this.onSubmit}>
                 <input type="text" name="username" placeholder="Username" className="User" onChange={this.inputHandle} value={this.state.entruser.username}/>
                 <input type="password" name="password" placeholder="Password" className="User" onChange={this.inputHandle} value={this.state.entruser.password}/>
                 <button type="submit">{!this.state.test&&"LogIn"}
                     {this.state.test?<Link to="/todo">Submit</Link>:console.log("you are not admin!")}</button>
             </form>
            </>
        //    <Link to="/todo">Submit</Link>
        )
    }
}

export default Register;