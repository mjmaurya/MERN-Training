import React,{Component} from 'react';
import {Link,Route,BrowserRouter,NavLink,Redirect} from 'react-router-dom';


const Home=()=>{
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}   

const About=()=>{
    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
}

const Contact=()=>{
    return (
        <div>
            <h1>Contact Page</h1>
        </div>
    );
}
const User=(params)=>{
    return (
        <div>
            <h1>Welcome {params.username} !!</h1>
        </div>
    );
}



export class Main extends Component {

    state={
        logening:false
    }
    handleLogedIn(){
        this.setState({
            logening:!this.state.logening
        })
    }
    render() {
        return (
            <BrowserRouter>
            <div >
                <h1>React Routing</h1>
                <Link to="/home">Home</Link>||
                <Link to="/about">About</Link>||
                <Link to="/contact">Contact</Link>
                <input type="button" onClick={this.handleLogedIn.bind(this)} value={this.state.logening?"Logout":"LogIn"}/>
            </div>
            <div >
                <h1>React Routing</h1>
                <NavLink to="/home" activeStyle={{color:'green'}}>Home</NavLink>||
                <NavLink to="/about" activeStyle={{color:'green'}}>About</NavLink>||
                <NavLink to="/contact" activeStyle={{color:'green'}}>Contact</NavLink>||
                <NavLink to="/user/Manoj" activeStyle={{color:'green'}}>User Details</NavLink>||
            </div>
            <Route path="/" exact render={Home}/>
            <Route path="/home" render={Home}/>
            <Route path="/about" render={About}/>
            <Route path="/contact" render={()=> this.state.logening?<Contact/>:<Redirect to="/"/>}/>
            <Route path="/user/:username" render={({match})=>this.state.logening?<User username={match.params.username}/>:<Redirect to="/"/>}/>
            </BrowserRouter>
        );
    }
}