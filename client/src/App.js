import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/user/UserDashboard';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    {
                        false ? 
                        (
                        <>
                            <Route path="/admin/dashboard" element={<AdminDashboard />} />
                            <Route path="/user/dashboard" element={<UserDashboard />} />
                        </>
                        )
                        :
                        (
                            <Route path="/" element={<Home />} />
                        ) 
                    }
                </Routes>
            </Router>
        </div>
    )
}

export default App;