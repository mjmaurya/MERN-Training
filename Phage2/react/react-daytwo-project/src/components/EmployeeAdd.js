import  React,{Component} from 'react';
import axios from 'axios';

export class EmployeeAdd extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            salary:'',
            designation:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const employee = {
            name:this.state.name,
            salary:this.state.salary,
            designation:this.state.designation,
        }  
        axios.post('http://localhost:5001/employee',employee)
            .then(res=>{
                console.log("Employee Added Sucssesuly");
                this.setState({
                    name:'',
                    salary:'',
                    designation:'',
                });
                this.props.history.push('/employees');
            }
        ).catch(err=>{
            console.log(err);
        });
    }

    handleChange(e){
        e.preventDefault();
        const {name,value} = e.target;
        this.setState({
            [name]:value,
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" name="name"  onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input type="text" className="form-control" placeholder="Salary" name="salary"  onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text" className="form-control" placeholder="Designation" name="designation"  onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary" type="submit">Add</button>
                </form>
            </div>
        )
    }
}