import React, { Component, useEffect, useState } from 'react'

function CreateTagForm(props) {
    return (
        <div>
            <p>This is the TagForm component for our app.</p>

            <div>
            <form onSubmit={props.handleSubmit}>
                    <label>
                        Tag Name: 
                        <input type="text" name="tagName" value={props.tagName} required onChange={props.handleChange} />
                    </label>
                    <br />
                    <br />
                    <button type="submit">Add</button>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    )
}

export default CreateTagForm