import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className='sub-content'>
                <h2>Welcome to the Home page for my app!</h2>
                <p>Some details about myself:</p>
                <ul>
                    <li>I am a Year 1 Computer Science student.</li>
                    <li>I have little to no prior experience before taking on this challenge.</li>
                    <li>I have been learning React/Rails over the winter break to create this app.</li>
                </ul>

                <p>Frontend is done with ReactJS and Backend is done with Ruby on Rails, using Axios API to communicate between the two.</p>
                <p>Task Fields:</p>
                <ul>
                    <li><strong>Title:</strong> The title of the task</li>
                    <li><strong>Tag:</strong> The tag associated with the task</li>
                    <li><strong>Date:</strong> The date of deadline of the task</li>
                    <li><strong>Time:</strong> The time of deadline of the task</li>
                    <li><strong>Completed:</strong> The completion status of the task</li>
                </ul>
                <p>Tag Field:</p>
                <ul>
                    <li><strong>Name:</strong> The name of the tag</li>
                    </ul>
            </div>
        )
    }
}

export default Home