import React, { Component } from 'react'
import ListTasks from '../components/ListTasks'
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
    }

    componentDidMount() {
        axios.get('/api/tasks/index').then(res => {
            const tasks = res.data;
            this.setState({ tasks: tasks });
        });
    }

    render() {
        return (
            <div>
                <p>This is the Home view for our app.</p>
                <ListTasks tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Home