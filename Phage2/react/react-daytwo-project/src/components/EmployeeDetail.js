import  React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class EmployeeDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            employee: {},
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5001/employee/'+this.props.match.params.id).then((response)=>{
            this.setState({employee:response.data});
        }).catch((error)=>{
            console.log(error);
        });
        
    }
    deleteEmployee(id){
        axios.delete('http://localhost:5001/employee/'+id).then((response)=>{
            alert('Employee Deleted');
            this.props.history.push('/employees');
        }).catch((error)=>{
            console.log(error);
        });
    }


    render(){
        return(
            <div>
               <h1>Employee Details</h1>
               <br></br>
               <div className="card">
                   <div className="card-header">
                       <h2>Details of {this.state.employee.name}</h2>
                   </div>
                   <div className="card-body">
                       <table className="table">
                           <tbody>
                           <tr>
                                   <td>Employee ID:</td>
                                   <td>{this.state.employee.id}</td>
                               </tr>
                               <tr>
                                   <td>Employee Name:</td>
                                   <td>{this.state.employee.name}</td>
                               </tr>

                               <tr>
                                   <td>Employee Designation:</td>
                                   <td>{this.state.employee.designation}</td>
                               </tr>
                               <tr>
                                   <td>Employee Salary:</td>
                                   <td>{this.state.employee.salary}</td>
                               </tr>
                            </tbody>
                       </table>
                   </div>
                   <div className="card-footer">
                   <button className="btn btn-primary m-2" onClick={()=>{this.props.history.push('/employees')}}>Back</button>
                   <Link className="btn btn-warning m-2" to={`/employee-update/${this.state.employee.id}`}>Edit</Link>
                   <button className="btn btn-danger m-2" onClick={()=>{this.deleteEmployee(this.state.employee.id)}}>Delete</button>
               </div>
               </div>
               
            </div>
        )
    }
}