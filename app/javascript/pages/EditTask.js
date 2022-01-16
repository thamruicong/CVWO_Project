import React, { Component } from 'react'
import axios from 'axios'

import TaskForm from '../components/Tasks/TaskForm';

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            task: {
                title: '',
                tag_id: '',
                date: '',
                time: '',
                completed: false,
            },

            tags: [],
        };
    }

    componentDidMount() {
        const curr_url = window.location.pathname;
        const task_id = curr_url.slice(12);
        const url_task = '/api/tasks/edit/' + task_id;

        axios.get(url_task).then(res => {
            const task = res.data;
            this.setState({ 
                task: {
                    title: task.title,
                    tag_id: task.tag_id,
                    date: task.date ? task.date : '',
                    time: task.time ? task.time.slice(11, 23) : '',
                    completed: task.completed
                } 
            });

            console.log(task);
        });

        const url_tag = '/api/tags/index';

        axios.get(url_tag).then(res => {
            const tags = res.data;
            this.setState({ tags: tags });

            console.log(tags);
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
    }

    handleCheckbox = () => {
        this.setState((prevState) => {
            return {
                task: {
                    ...prevState.task,
                    completed: !prevState.task.completed,
                }
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const curr_url = window.location.pathname;
        const task_id = curr_url.slice(12);

        const task = {
            title: this.state.task.title,
            tag_id: this.state.task.tag_id,
            date: this.state.task.date,
            time: this.state.task.time,
            completed: this.state.task.completed,
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;  
        axios.put('/api/tasks/update/' + task_id, { task }, {withCredentials: true,
        headers:
        {
            "X-CSRF-Token": token,
            "Content-Type": "application/json",
        }})
        .then(res => {
            window.location.assign("/tasks/" + task_id);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <p>This is the EditTask page for our app.</p>
                <TaskForm 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    handleCheckbox={this.handleCheckbox}
                    task={this.state.task}
                    tags={this.state.tags}
                    button_text="Edit"
                />
            </div>
        )
    }
}

export default EditTask