import React, { Component } from 'react'
import axios from 'axios'

import ListTasks from '../components/Tasks/ListTasks'

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
    }

    componentDidMount() {
        const url = '/api/tasks/index';

        axios.get(url).then(res => {
            const tasks = res.data;
            this.setState({ tasks: tasks });

            console.log(tasks);
        });
    }

    render() {
        return (
            <div>
                <p>This is the Tasks page for our app.</p>
                <ListTasks tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Tasks