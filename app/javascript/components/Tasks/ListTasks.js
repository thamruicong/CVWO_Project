import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ListTasks(props) {
    return (
        <div>
            <div>
                <p>Completed</p>
                <ul className='task-list'>
                    {
                        props.tasks
                            .filter(task => {
                                return ((task.completed == true) 
                                        && 
                                        (task.title.toLowerCase().includes(props.searchText.toLowerCase()))
                                        &&
                                        (props.selectedTag == '' ? true : task.tag_id == props.selectedTag)
                                        );
                            })
                            .map(task => 
                                <li className='task-list-item' key={task.id}>
                                    <Link to={"/tasks/" + task.id} className='task-list-link'>{task.title}
                                    </Link> 
                                </li>
                            )
                    }
                </ul>
            </div>

            <div>
                <p>Incomplete</p>
                <ul className='task-list'>
                    {
                        props.tasks
                            .filter(task => {
                                return ((task.completed == false) 
                                        && 
                                        (task.title.toLowerCase().includes(props.searchText.toLowerCase()))
                                        &&
                                        (props.selectedTag == '' ? true : task.tag_id == props.selectedTag)
                                        );
                            })
                            .map(task => 
                                <li className='task-list-item' key={task.id}>
                                    <Link to={"/tasks/" + task.id} className='task-list-link'>{task.title}
                                    </Link> 
                                </li>
                            )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ListTasks