import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

// Nav Bar
import MainNav from '../components/NavBar/MainNav'

// Main Pages
import Home from '../pages/Home'
import Tasks from '../pages/Tasks'
import New from '../pages/New'
import ShowTask from '../pages/ShowTask'
import EditTask from '../pages/EditTask'

// Error Page
import PageNotFound from '../pages/PageNotFound'

class App extends Component {
    render() {
        return (
            <div className='main-content'>
                <Router>
                    <MainNav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/tasks/new" element={<New />} />
                        <Route path="/tasks/:id" element={<ShowTask />} />
                        <Route path="/tasks/edit/:id" element={<EditTask />} />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App