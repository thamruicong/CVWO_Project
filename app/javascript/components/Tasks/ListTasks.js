import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ListTasks(props) {
    return (
        <div>
            <p>This is the ListTasks component for our app.</p>
            
            <div>
                <ul>
                    {
                        props.tasks
                            .filter(task => {
                                return ((task.completed == props.displayCompleted) 
                                        && 
                                        (task.title.toLowerCase().includes(props.searchText.toLowerCase())));
                            })
                            .map(task => 
                                <li key={task.id}>
                                    <Link to={"/tasks/" + task.id}>{task.title}</Link>
                                </li>
                                )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ListTasks