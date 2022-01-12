import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

class Tasks extends Component {
    // prop = {
    //     data: [],
    // };

    // componentDidMount() {
    //     axios.get('/api/todos/index').then(res => {
    //         console.log(res);
    //         console.log('test');
    //     });
    // }

    render() {
        return (
            <div>
                <p>This is the Tasks view for our app.</p>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Tasks