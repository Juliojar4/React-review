import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Currencies from '../pages/Currencies';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Slip from '../pages/Slip';
import CurrencyPeriod from '../pages/CurrencyPeriod';
import Login from '../pages/Login';
import EditUser from '../pages/EditUser';

const Router = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="slip" element={<Slip />}></Route>
            <Route path="currencies" element={<Currencies />}></Route>
            <Route path="currencyPeriod" element={<CurrencyPeriod />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="editUser" element={<EditUser />}></Route>
        </Routes>
    );
};

export default Router;
