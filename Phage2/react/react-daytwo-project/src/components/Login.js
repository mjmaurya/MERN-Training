import React, { Component } from 'react';
import { login } from '../repository';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
            ,user_type: ''
        };
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        login(this.state)
        .then((result) => {
            if (localStorage.getItem('isloggedIn')) {
                console.log('logged in');
                console.log(localStorage.getItem('isloggedIn'));
                window.location = '/';
            }
            else {
                window.location = '/register';
            }
        }
        ).catch((error) => {
            alert(error)
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group my-3">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Username" name="username"  onChange={this.handleChange}/>
                </div>
                <div className="form-group my-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="password" name="password"  onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary m-2" type="submit">Login</button>
                <button className="btn btn-danger m-2" type="reset">Clear</button>
                </form>
            </div>
        );
    }
}