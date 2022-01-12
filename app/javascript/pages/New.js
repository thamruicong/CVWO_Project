import React, { Component } from 'react'
import NewTask from '../components/NewTask'

class New extends Component {
    render() {
        return (
            <div>
                <p>This is the New view for our app.</p>
                <NewTask />
            </div>
        )
    }
}

export default New