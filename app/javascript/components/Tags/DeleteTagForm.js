import React, { Component, useEffect, useState } from 'react'

function DeleteTagForm(props) {
    return (
        <div>
            <div>
            <form onSubmit={props.handleSubmit}>
                    <label>
                        Tag Name: 
                        <select name="selectedTagId" className='input-field' value={props.selectedTagId} required onChange={props.handleChange}>
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
                    <button className='nice-button' type="submit">Delete</button>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    )
}

export default DeleteTagForm