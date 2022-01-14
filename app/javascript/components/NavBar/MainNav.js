import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainNav extends Component {
    render() {
        return (
            <div>
                <p>This is the MainNav component for our app.</p>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/tasks">Tasks</Link> |{" "}
                    <Link to="/tasks/new">Add Task</Link>
                </nav>
            </div>
        )
    }
}

export default MainNav