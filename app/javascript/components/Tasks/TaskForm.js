import React, { Component, useEffect, useState } from 'react'

function TaskForm(props) {
    return (
        <div>
            <p>This is the TaskForm component for our app.</p>

            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                        Title: 
                        <input type="text" name="title" value={props.task.title} required onChange={props.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Tag: 
                        <select name="tag_id" value={props.task.tag_id} required onChange={props.handleChange}>
                            <option value=''>----------</option>
                            {
                                props.tags
                                .map(tag => 
                                    <option value={tag.id} key={tag.id}>{tag.name}</option>
                                )
                            }
                        </select>
                    </label>
                    <br />
                    <br />
                    <label>
                        Date: 
                        <input type="date" name="date" value={props.task.date} onChange={props.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Time: 
                        <input type="time" name="time" value={props.task.time} onChange={props.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Completed: 
                        <input type="checkbox" name="completed" checked={props.task.completed} onChange={props.handleCheckbox} />
                    </label>
                    <br />
                    <br />
                    <button type="submit">{props.button_text}</button>
                </form>
            </div>
        </div>
    )
}

export default TaskForm