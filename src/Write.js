import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';

export default class Write extends Component {
	constructor(props){
		super(props);

		this.state={
			message: ''
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onMessageChange = this.onMessageChange.bind(this);
	}

	onSubmit(e){
		e.preventDefault();
		let curTime = new Date();
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

		const newPost = {
			message: this.state.message,
			time:months[parseInt(curTime.getMonth())] + ' ' + curTime.getDate(),
			include: true
		};

		axios.post('http://localhost:4000/capstoneprototype/add', newPost)
            .then(res => console.log(res.data));

	}

	onMessageChange(e){
		this.setState({
			message: e.target.value
		});
	}

    render() {
        return (
            <div>
                <div className = 'jumbotron' >
                <h4>Write a Post</h4>
                <form onSubmit={this.onSubmit}>
                	<textarea name = 'message' value = {this.state.message} onChange = {this.onMessageChange} className = 'form-control' />
                	<button className = 'btn btn-primary' type = 'submit'>Post</button>
                </form>
                </div>
            </div>
        )
    }
}