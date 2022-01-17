import React, { Component } from 'react'
import axios from 'axios'

import ListTasks from '../components/Tasks/ListTasks'
import SearchBar from '../components/Tasks/SearchBar';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            searchText: '',
            displayCompleted: false,
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

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    }

    handleCheckbox = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayCompleted: !prevState.displayCompleted,
            }
        });
    }

    render() {
        return (
            <div>
                <p>This is the Tasks page for our app.</p>
                <SearchBar 
                    handleChange={this.handleChange}
                    handleCheckbox={this.handleCheckbox}
                    searchText={this.state.searchText}
                    displayCompleted={this.state.displayCompleted}
                />
                <ListTasks 
                    tasks={this.state.tasks}
                    searchText={this.state.searchText}
                    displayCompleted={this.state.displayCompleted}
                />
            </div>
        )
    }
}

export default Tasks