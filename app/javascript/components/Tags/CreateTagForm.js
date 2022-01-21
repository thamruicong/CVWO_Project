import React, { Component, useEffect, useState } from 'react'

function CreateTagForm(props) {
    return (
        <div>
            <div>
            <form onSubmit={props.handleSubmit}>
                    <label>
                        Tag Name: 
                        <input className='input-field' type="text" name="tagName" placeholder="Example Tag" value={props.tagName} required onChange={props.handleChange} autoComplete='off'/>
                    </label>
                    <br />
                    <br />
                    <button className='nice-button' type="submit">Add</button>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    )
}

export default CreateTagForm