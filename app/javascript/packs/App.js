import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

// Nav Bar
import MainNav from '../components/NavBar/MainNav'

// Home Page
import Home from '../pages/Home'

// Tasks Pages
import Tasks from '../pages/Tasks'
import New from '../pages/New'
import ShowTask from '../pages/ShowTask'

// Error Page
import PageNotFound from '../pages/PageNotFound'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <MainNav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/tasks/new" element={<New />} />
                        <Route path="/tasks/:id" element={<ShowTask />} />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App