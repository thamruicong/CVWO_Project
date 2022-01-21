import React, { Component } from 'react'
import axios from 'axios'

import IndividualTask from '../components/Tasks/IndividualTask';

class ShowTask extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            task: [],
            tag: [],
        };
    }
    
    componentDidMount() {
        const curr_url = window.location.pathname;
        const task_id = curr_url.slice(7);
        const url_task = '/api/tasks/show/' + task_id;

        axios.get(url_task).then(res => {
            const task = res.data;
            this.setState({ task: task });

            const tag_id = task.tag_id;
            const url_tag = '/api/tags/show/' + tag_id;

            axios.get(url_tag).then(res => {
                const tag = res.data;
                this.setState({ tag: tag });

                console.log(task);
                console.log(tag);
            })
            .catch(err => {
                console.log(err);
            });
        });
    }

    handleDelete = () => {
        if (confirm("Are you sure?")) {
            const curr_url = window.location.pathname;
            const task_id = curr_url.slice(7);
            const url = '/api/tasks/' + task_id;

            const token = document.querySelector('meta[name="csrf-token"]').content;  
            axios.delete(url, {withCredentials: true,
            headers:
            {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            }})
            .then(res => {
                window.location.assign("/tasks");
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    render() {
        return (
            <div className='sub-content'>
                <IndividualTask 
                    task={this.state.task}
                    tag={this.state.tag}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default ShowTask