import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function SearchBar(props) {
    return (
        <div>
            <p>This is the SearchBar component of our app.</p>

            <div>
                <label>
                    Filter by task: 
                    <input type="text" name="searchText" placeholder="Example Task" value={props.searchText} onChange={props.handleChange} />
                </label>
                <br />
                <br />
                <label>
                    Filter by tag: 
                    <select name="selectedTag" value={props.selectedTag} onChange={props.handleChange}>
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
                    Show Completed:
                    <input type="checkbox" name="displayCompleted" checked={props.displayCompleted} onChange={props.handleCheckbox} />
                </label>
            </div>
        </div>
    )
}

export default SearchBar