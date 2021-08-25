import React,{Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../repository';


export class Employees extends Component {
    
        constructor(props) {
            super(props);
            this.state = {
                employees: [],
            }
        }
        componentDidMount() {
                axios.get('http://localhost:5001/employee')
                .then(responce=>{
                    this.setState({employees: responce.data})
                    console.log(this.state.employees)
                }).catch(error=>{
                    console.log(error)
                })
        }

    render() {
        const xyz=isAuthenticated();
        console.log(xyz);
        return (
            xyz?
            <div>
                <h1>Employees Data</h1>
                <Link to={'/employee-add'} className="nav-link btn btn-warning"> Add Employee</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee=>{
                            return <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <Link to={`/employee-detail/${employee.id}`}>View</Link>
                                </td>
                            </tr>
                        }
                        )}
                    </tbody>
                </table>
            </div>
        :
        <Link to={'/login'} className="nav-link btn btn-warning"> Login to Manage Employee</Link>
        )
    }
}