import React, { Component } from 'react'
import Tasks from '../components/Tasks'

class Home extends Component {
    render() {
        return (
            <div>
                <p>This is the Home view for our app.</p>
                <Tasks text="this is a test text"/>
            </div>
        )
    }
}

export default Home