import React, { Component } from 'react'

function SearchBar(props) {
    return (
        <div>
            <p>This is the SearchBar component of our app.</p>

            <div>
                <label>
                    Filter: 
                    <input type="text" name="searchText" placeholder="Example Task" value={props.searchText} onChange={props.handleChange} />
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