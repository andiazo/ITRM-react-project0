import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from '../components/login';
import RegisterProduct from '../components/registerProduct'

class Routing extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register/:id" element={<RegisterProduct  />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Routing;