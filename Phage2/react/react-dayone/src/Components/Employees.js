import React from 'react'
import { Employee } from './Employee'

export class Employees extends React.Component {
    state = {
        employees: [
            {name: 'John Doe', age: 30, role: 'Developer'},
            {name: 'Jane Doe', age: 25, role: 'Manager'},
            {name: 'Bob Smith', age: 40, role: 'Manager'},
            {name: 'Sally Jones', age: 35, role: 'Manager'},
            {name: 'Mike Jones', age: 35, role: 'Manager'},
            {name: 'Sue Jones', age: 35, role: 'Tester'},
        ],
    }
    addEmployee = () => {
        var newEmployee = this.state.employees.map((employee, index) => {
            employee.age+=5;
            return employee;
        });
        this.setState({
            employees: newEmployee,
        });
    }
    render() {
        return (
            <div>
                <h3>Employees</h3>
                {/* <div>{this.state.employees[0].name} | {this.state.employees[0].age} | {this.state.employees[0].role}</div>
                <div>{this.state.employees[1].name} | {this.state.employees[1].age} | {this.state.employees[1].role}</div>
                <div>{this.state.employees[2].name} | {this.state.employees[2].age} | {this.state.employees[2].role}</div>
                <div>{this.state.employees[3].name} | {this.state.employees[3].age} | {this.state.employees[3].role}</div>
                <div>{this.state.employees[4].name} | {this.state.employees[4].age} | {this.state.employees[4].role}</div> */}

                {this.state.employees.map((employee, index) => (
                    <div key={index}>
                        {/* {employee.name} | {employee.age} | {employee.role} */}
                        <Employee name={employee.name} age={employee.age} role={employee.role} />
                    </div>
                ))}
                <input type="button" value="Add Employee" onClick={this.addEmployee} />
            </div>
        )
    }

}
