import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function SearchBar(props) {
    return (
        <div>
            <div>
                <label className='input-label'>
                    Filter by task: 
                    <input className='input-field' type="text" name="searchText" placeholder="Example Task" value={props.searchText} onChange={props.handleChange} autoComplete='off'/>
                </label>
                <br />
                <br />
                <label>
                    Filter by tag: 
                    <select className='input-field' name="selectedTag" value={props.selectedTag} onChange={props.handleChange}>
                        <option value=''>----------</option>
                        {
                            props.tags
                            .map(tag => 
                                <option value={tag.id} key={tag.id}>{tag.name}</option>
                            )
                        }
                    </select>
                </label>
            </div>
        </div>
    )
}

export default SearchBar