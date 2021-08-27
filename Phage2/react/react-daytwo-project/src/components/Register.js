import React, { Component } from 'react';
import { register } from '../repository';

export default class Register extends Component {
    constructor(props) {    
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            usertype: ''
    }}
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        register(this.state)
            .then(() => {
                alert('Registered!');
                window.location.href = '/login';
            }).catch((err) => {
                alert(err);
            });
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group my-3">
                <label>UserName</label>
                <input type="text" className="form-control" placeholder="Username" name="username"  onChange={this.handleChange}/>
            </div>
            <div className="form-group my-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="password" name="password"  onChange={this.handleChange}/>
            </div>
            <div className="form-group my-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" name="email"  onChange={this.handleChange}/>
            </div>
            <div className="form-group my-3">
                <label>User Type</label>
                <select className="form-control" name="usertype" onChange={this.handleChange}>
                    <option>Select</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>
            <button className="btn btn-primary m-2" type="submit">Register</button>
            <button className="btn btn-danger m-2" type="reset">Clear</button>
            </form>
        </div>
        );
    }
}