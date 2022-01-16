import React, { Component } from 'react'
import axios from 'axios'

import IndividualTask from '../components/Tasks/IndividualTask';

class ShowTask extends Component {
    constructor(props) {
        super(props);
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
            });
        });
        // .catch(err => {
        //     console.log(err);
        // });

        // const tag_id = this.state.task.tag_id;
        // const url_tag = '/api/tags/show/' + tag_id;

        // axios.get(url_tag).then(res => {
        //     const tag = res.data;
        //     this.setState({ tag: tag });
        // });
        // .catch(err => {
        //     console.log(err);
        // });
    }

    render() {
        return (
            <div>
                <p>This is the ShowTask page for our app.</p>
                <IndividualTask 
                    task={this.state.task}
                    tag={this.state.tag}
                />
            </div>
        )
    }
}

export default ShowTask