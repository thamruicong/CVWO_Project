import React, { Component } from 'react'
import Home from '../pages/Home'
import New from '../pages/New'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/new" element={<New />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App