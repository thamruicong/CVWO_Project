import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function IndividualTask(props) {
    return (
        <div>
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
                        props.task.completed ? " Done" : " Incomplete"
                    }
                </p>
            </div>

            <Link to={"/tasks/edit/" + props.task.id}>Edit</Link> |{" "}
            <button className='button-as-link' onClick={props.handleDelete}>Delete</button>
        </div>
    )
}

export default IndividualTask