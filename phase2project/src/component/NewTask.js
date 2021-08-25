import React,{Component} from 'react';
import axios from 'axios';

class NewTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            dueDate: '',
            priority: '',
            status: '',
            project: '',
            color: '',
            textColor: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5001/task',this.state)
        .then(res => {
            const tasks=this.props.tasks.concat(res.data);
            this.props.setTask(tasks);
            alert('Task Added');
        })
        .catch(err => console.log(err))
        this.setState({
            title: '',
            description: '',
            dueDate: '',
            priority: '',
            status: '',
            project: '',
            color: '',
            textColor: ''
        })

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1>Add New Task</h1>
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Due Date</label>
                                <input type="date" className="form-control" name="dueDate" value={this.state.dueDate} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Priority</label>
                                <select className="form-control" name="priority" value={this.state.priority} onChange={this.handleChange}>
                                    <option value="">Select Priority</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-control" name="status" value={this.state.status} onChange={this.handleChange}>
                                    <option value="">Select Status</option>
                                    <option value="Not Started">Not Started</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <label>Category</label>
                                <select className="form-control" name="category" value={this.state.category} onChange={this.handleChange}>
                                    <option value="">Select Category</option>
                                    <option value="Work">Work</option>
                                    <option value="Home">Home</option>
                                    <option value="Personal">Personal</option>
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <label>Card Color</label>
                                <input type="color" className="form-control" name="color" value={this.state.color} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group my-2">
                                <label>Test Color</label>
                                <input type="color" className="form-control" name="textColor" value={this.state.textColor} onChange={this.handleChange}/>
                            </div>
                            <button className="btn btn-primary my-2">Add Task</button>
                        </form>
                    </div>
                    <div className="col-md-6" align='center'>
                        <h3>New Task Preview</h3>
                        <div className="card my-2" style={{background:this.state.color,minHeight:'300px',color:this.state.textColor}}>
            <div className="card-header">
                <h3 className="card-title">{this.state.title}</h3>
            </div>
            <div className="card-body">
            <p className="card-text"><b>Discription: </b>{this.state.description}</p>
            <p className="card-text"><b>Category: </b>{this.state.category}</p>
            <p className="card-text"><b>Due Date: </b>{this.state.dueDate}</p>
            <p className="card-text"><b>Priority: </b>{this.state.priority}</p>
            <p className="card-text"><b>Status: </b>{this.state.status}</p>
        </div>
    </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}
export default NewTask;