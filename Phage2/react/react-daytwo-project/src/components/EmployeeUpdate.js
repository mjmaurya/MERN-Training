import React, { Component } from 'react';
import axios from 'axios';

export default class EmployeeUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            designation: '',
            employee:{}
        };
    }
    componentDidMount(){
        axios.get('http://localhost:5001/employee/'+this.props.match.params.id).then((response)=>{
            this.setState({
                employee:response.data,
                name:response.data.name,
                salary:response.data.salary,
                designation:response.data.designation
            });
            
        }).catch((error)=>{
            console.log(error);
        });
        
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:5001/employee/'+this.props.match.params.id,{
            name:this.state.name,
            salary:this.state.salary,
            designation:this.state.designation
        }).then((response)=>{
            this.setState({
                name:response.data.name,
                salary:response.data.salary,
                designation:response.data.designation
            });
            this.props.history.push('/employees');
        }
        ).catch((error)=>{
            console.log(error);
        }); 
    };

    render() {
        return (
            <div>
                <h1>Update Employee</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" defaultValue={this.state.name} name="name"  onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input type="text" className="form-control" placeholder="Salary" defaultValue={this.state.salary} name="salary"  onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text" className="form-control" placeholder="Designation" defaultValue={this.state.designation} name="designation"  onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary m-2" type="submit">Update</button>
                </form>
            </div>
        );
    }
}
