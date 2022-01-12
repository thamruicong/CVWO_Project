import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tag_id: null,
            date: null,
            time: null,
            completed: false,
        };
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });

        console.log(name);
        console.log(value);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            title: this.state.title,
            tag_id: this.state.tag_id,
            date: this.state.date,
            time: this.state.time,
            completed: this.state.completed,
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;  
        axios.post('api/tasks/create', { task }, {withCredentials: true,
        headers:
        {
            "X-CSRF-Token": token,
            "Content-Type": "application/json",
        }})
        .then(res => {
            console.log(res.data); 
            //error handling => currently error is logged into console
            //redirect to '/' for successful post request
        })
    }

    render() {
        return (
            <div>
                <p>This is the NewTask view for our app.</p>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title: 
                        <input type="text" name="title" onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Tag_id: 
                        <input type="number" name="tag_id" onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Date: 
                        <input type="date" name="date" onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Time: 
                        <input type="time" name="time" onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default NewTask