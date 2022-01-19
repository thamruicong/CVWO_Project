import React, { Component } from 'react'
import axios from 'axios'

import ListTasks from '../components/Tasks/ListTasks'
import SearchBar from '../components/Tasks/SearchBar';
import TagsModal from '../components/Tags/TagsModal';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

        this.state = {
            tasks: [],
            tags: [],

            searchText: '',
            selectedTag: '',
            displayCompleted: false,
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

    handleCheckbox = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayCompleted: !prevState.displayCompleted,
            }
        });
    }

    // handleTag(task, tags) {
    //     const taskTag = "";
    //     tags.forEach(tag => {
    //         if(tag.id == task.tag_id) {
    //             taskTag = tag.name;
    //         }
    //     });

    //     return taskTag;
    // }

    render() {
        return (
            <div>
                <p>This is the Tasks page for our app.</p>
                <SearchBar 
                    handleChange={this.handleChange}
                    handleCheckbox={this.handleCheckbox}
                    searchText={this.state.searchText}
                    tags={this.state.tags}
                    selectedTag={this.state.selectedTag}
                    displayCompleted={this.state.displayCompleted}
                />
                <TagsModal />
                <ListTasks 
                    // handleTag={this.handleTag}
                    tasks={this.state.tasks}
                    // tags={this.state.tags}
                    searchText={this.state.searchText}
                    selectedTag={this.state.selectedTag}
                    displayCompleted={this.state.displayCompleted}
                />
            </div>
        )
    }
}

export default Tasks