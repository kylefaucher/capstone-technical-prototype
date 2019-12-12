import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Feed extends Component {
	constructor(props){
		super(props);
		this.state = {messages: []};
	}
	componentDidMount() {
        axios.get('http://localhost:4000/capstoneprototype/')
            .then(response => {
                this.setState({ messages: response.data });
                console.log(response.data);
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div className = 'jumbotron' >
                <h4>Feed</h4>
                <div>
                	 {this.state.messages.map(item => {if(item.message && item.include == true){
                	 	return <div className = "post" key={item._id}> {item.message} <span> {item.time} </span></div>;
                	 }})}
                </div>
                </div>
            </div>
        )
    }
}