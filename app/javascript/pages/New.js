import React, { Component } from 'react'
import axios from 'axios'

import NewTask from '../components/Tasks/NewTask';

class New extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            task: {
                title: '',
                tag_id: undefined,
                date: undefined,
                time: undefined,
                completed: false,
            },

            tags: [],
        };
    }

    componentDidMount() {
        const url = '/api/tags/index';

        axios.get(url).then(res => {
            const tags = res.data;
            this.setState({ tags: tags });
        });
    }
    
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState((prevState) => {
            return {
                task: {
                    ...prevState.task,
                    [name]: value,
                }
            }
        });

        console.log(this.state.task);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            title: this.state.task.title,
            tag_id: this.state.task.tag_id,
            date: this.state.task.date,
            time: this.state.task.time,
            completed: this.state.task.completed,
        };
        
        window.location.assign("/tasks");

        // const token = document.querySelector('meta[name="csrf-token"]').content;  
        // axios.post('api/tasks/create', { task }, {withCredentials: true,
        // headers:
        // {
        //     "X-CSRF-Token": token,
        //     "Content-Type": "application/json",
        // }})
        // .then(res => {
        //     console.log(res.data);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }

    render() {
        return (
            <div>
                <p>This is the New page for our app.</p>
                <NewTask 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    // task={this.state.task}
                    tags={this.state.tags}
                />
            </div>
        )
    }
}

export default New