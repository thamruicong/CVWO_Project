import React, { Component } from 'react'
import axios from 'axios'

import ListTasks from '../components/Tasks/ListTasks'
import SearchBar from '../components/Tasks/SearchBar';
import TagsModal from '../components/Tags/TagsModal';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            tasks: [],
            tags: [],

            searchText: '',
            selectedTag: '',
        };
    }

    componentDidMount() {
        const url_tasks = '/api/tasks/index';

        axios.get(url_tasks).then(res => {
            const tasks = res.data;
            this.setState({ tasks: tasks });

            console.log(tasks);
        });

        const url_tags = '/api/tags/index';

        axios.get(url_tags).then(res => {
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
                ...prevState,
                [name]: value,
            }
        });
    }

    render() {
        return (
            <div className='sub-content'>
                <SearchBar 
                    handleChange={this.handleChange}
                    searchText={this.state.searchText}
                    tags={this.state.tags}
                    selectedTag={this.state.selectedTag}
                />
                <TagsModal />
                <ListTasks 
                    tasks={this.state.tasks}
                    searchText={this.state.searchText}
                    selectedTag={this.state.selectedTag}
                />
            </div>
        )
    }
}

export default Tasks