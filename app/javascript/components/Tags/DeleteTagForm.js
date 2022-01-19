import React, { Component, useEffect, useState } from 'react'

function DeleteTagForm(props) {
    return (
        <div>
            <p>This is the TagForm component for our app.</p>

            <div>
            <form onSubmit={props.handleSubmit}>
                    <label>
                        Tag Name: 
                        <select name="selectedTagId" value={props.selectedTagId} required onChange={props.handleChange}>
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
                    <button type="submit">Delete</button>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    )
}

export default DeleteTagForm