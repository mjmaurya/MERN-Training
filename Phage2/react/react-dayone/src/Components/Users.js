import React,{Component} from 'react';

class Users extends Component {
  render() {
    // var checked=this.props.age?this.props.age:"Invalid Age"
    // return (
    //   <div>
    //     <h3>User Name: {this.props.name} | Age: {checked}</h3>
    //   </div>
    // );


    if (this.props.age) {
        return (
      <div>
          <div>{this.props.header}</div>
        <h3>User Name: {this.props.name} | Age: {this.props.age}</h3>
        <div>{this.props.footer}</div>
      </div>
        );
        
    }
    else{
        return (
      <div>
          <div>{this.props.header}</div>
        <h3>User Name: {this.props.name} </h3>
        <div>{this.props.footer}</div>
      </div>
        );
    }
  }

 
}
Users.defaultProps = {
    header:"This is Header",
    footer:"This is Footer"
}
export default Users;
