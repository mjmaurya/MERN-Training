import React,{Component} from 'react';

class Users extends Component {
  state={
    name:"Manoj"
  }

  changeNameOne=()=>{
    this.setState({
      name:"Manoj Kumar"
    })
  }
  changeNameTwo=(name)=>{
    this.setState({
      name:name
    })
  }
  changeNameFromInput=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  render() {
    // var checked=this.props.age?this.props.age:"Invalid Age"
    // return (
    //   <div>
    //     <h3>User Name: {this.props.name} | Age: {checked}</h3>
    //   </div>
    // );
   
    
        return (
      <div>
          <h1>User Name: {this.state.name}</h1>
          <input type="text" value={this.state.name} onChange={this.changeNameFromInput}/>
      </div>
    );
  }
  //         {/* <input type="button" onClick={this.changeNameOne} value="Click Me"/>
  //         <input type="button" onClick={()=>this.changeNameTwo("Er. Manoj Kumar")} value="I am Engins"/>
  //         <input type="button" onClick={this.changeNameTwo.bind(this,"Dr. Manoj Kumar")} value="I am Doctor"/> */}
  //       </div>
  //   );
  // }

 
}
Users.defaultProps = {
    header:"This is Header",
    footer:"This is Footer"
}
export default Users;
