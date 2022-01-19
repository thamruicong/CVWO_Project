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
                                        (task.title.toLowerCase().includes(props.searchText.toLowerCase()))
                                        &&
                                        (props.selectedTag == '' ? true : task.tag_id == props.selectedTag)
                                        );
                            })
                            .map(task => 
                                <li key={task.id}>
                                    <Link to={"/tasks/" + task.id}>{task.title}
                                     {/* |{" " + props.handleTag(task)}  */}
                                    </Link> 
                                </li>
                                    // props.tags
                                    //     .filter(tag => {
                                    //         return (tag.id == task.tag_id);
                                    //     })
                                    //     .map(tag => 
                                    //         <li key={task.id}>
                                    //             <Link to={"/tasks/" + task.id}>{task.title} |{" "} {tag.name}
                                    //             </Link> 
                                    //         </li>
                                    //     )
                            )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ListTasks