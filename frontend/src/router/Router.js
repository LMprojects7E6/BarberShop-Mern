import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardCustomer from '../pages/DashboardCustomer/DashboardCustomer';
import Login from '../pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';



const RouterPath = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<DashboardCustomer />} />
        </Routes>
    )
}

export default RouterPath;