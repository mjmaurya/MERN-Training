import React,{Component} from 'react'
import axios from 'axios'


export class Employees extends Component {
    
        constructor(props) {
            super(props);
            this.state = {
                employees: [],
            }
        }
        componentDidMount() {
                axios.get('http://localhost:5001/employee').
                then(responce=>{
                    this.setState({employees: responce.data})
                    console.log(this.state.employees)
                }).catch(error=>{
                    console.log(error)
                })
        }

    render() {
        return (
            <div>
                <h1>Employees Data</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee=>{
                            return <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.role}</td>
                                <td>{employee.salary}</td>
                            </tr>
                        }
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}