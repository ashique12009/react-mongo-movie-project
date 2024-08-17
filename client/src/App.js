import React, { useContext, useState } from 'react';
import Header from './components/header/Header';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/user/UserDashboard';
import { DataContext } from './components/context/DataProvider';

const App = () => {

    const [searchInput, setSearchInput] = useState("");
    const {account, setAccount} = useContext(DataContext);

    return (
        <div>
            <Router>
                <Header setSearchInput={setSearchInput} />
                <Routes>
                    {
                        account.email ? 
                        (
                            <>
                                {
                                    account.userType === "admin" && <Route path="/admin/dashboard" element={<AdminDashboard />} />
                                }
                                {
                                    account.userType === "user" && <Route path="/user/dashboard" element={<UserDashboard />} />
                                }
                            </>
                        ) : 
                        (
                            <>
                                <Route path="/" element={<Home searchInput={searchInput} />} />
                            </>
                        )
                    }
                </Routes>
            </Router>
        </div>
    )
}

export default App;