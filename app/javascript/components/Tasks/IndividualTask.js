import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function IndividualTask(props) {
    return (
        <div>
            <p>This is the IndividualTask component of our app.</p>

            <div>
                <p>Title : {props.task.title}</p>

                <p>Tag : {props.tag.name}</p>
                
                <p>Date : {
                        props.task.date ? props.task.date : " NIL"
                    }
                </p>
                
                <p>Time : {
                        props.task.time ? props.task.time.slice(11, 16) : " NIL"
                    }
                </p>
                
                <p>Completed : 
                    {
                        props.task.completed ? " Done" : " Incompleted"
                    }
                </p>
            </div>

            <Link to={"/tasks/edit/" + props.task.id}>Edit</Link> |{" "}
            <button onClick={props.handleDelete}>Delete</button>
        </div>
    )
}

export default IndividualTask