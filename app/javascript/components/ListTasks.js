import React, { Component, useEffect, useState } from 'react'

class ListTasks extends Component {
    render() {
        console.log(this.props.tasks);

        return (
            <div>
                <p>This is the ListTasks view for our app.</p>
                <ol>
                    {
                        this.props.tasks
                            .map(task => 
                                <li key={task.id}>{task.title}</li>
                                )
                    }
                </ol>
            </div>
        )
    }
}

export default ListTasks