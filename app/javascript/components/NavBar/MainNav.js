import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainNav extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <ul className='nav-bar-list'>
                    <li className='nav-bar-item'>
                        <Link to="/" className='nav-bar-link'>Home</Link>
                    </li>
                    <li className='nav-bar-item'>
                        <Link to="/tasks" className='nav-bar-link'>Tasks</Link>
                    </li>
                    <li className='nav-bar-item'>
                        <Link to="/tasks/new" className='nav-bar-link'>Add Task</Link>
                    </li>                    
                </ul>
            </div>
        )
    }
}

export default MainNav