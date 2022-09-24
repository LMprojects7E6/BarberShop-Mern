import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/error/ErrorPage";

//REDUAN
// import Login from "../pages/login/Login";
// import Register from "../pages/register/Register";

//MATIAS
import DashboardCustomer from '../pages/DashboardCustomer/DashboardCustomer';
import Login from '../pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';


// const Router = () => {
//   return (
//     <Routes>
//       <Route index element={<Login />} />
//       <Route path="login" element={<Login />} />
//       <Route path="register" element={<Register></Register>} />
//       <Route path="dashboard" element={<Dashboard />} />
//       <Route path="*" element={<ErrorPage />} />
//       <Route></Route>
//     </Routes>
//   );
// };

const RouterPath = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<DashboardCustomer />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default RouterPath;
