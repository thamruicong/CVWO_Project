import React, { Component, useEffect, useState } from 'react'

function TaskForm(props) {
    return (
        <div>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                        Title: 
                        <input className='input-field' type="text" name="title" value={props.task.title} required onChange={props.handleChange} autoComplete='off'/>
                    </label>
                    <br />
                    <br />
                    <label>
                        Tag: 
                        <select className='input-field' name="tag_id" value={props.task.tag_id} required onChange={props.handleChange}>
                            <option disabled value=''>----------</option>
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
                        <input className='input-field' type="date" name="date" value={props.task.date} onChange={props.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Time: 
                        <input className='input-field' type="time" name="time" value={props.task.time} onChange={props.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Completed: 
                        <input type="checkbox" name="completed" checked={props.task.completed} onChange={props.handleCheckbox} />
                    </label>
                    <br />
                    <br />
                    <button className='nice-button' type="submit">{props.button_text}</button>
                </form>
            </div>
        </div>
    )
}

export default TaskForm