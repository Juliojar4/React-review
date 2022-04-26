import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Currencies from '../pages/Currencies';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Slip from '../pages/Slip';
import CurrencyPeriod from '../pages/CurrencyPeriod';
import Login from '../pages/Login';
import EditUser from '../pages/EditUser';
import ForgotPassword from '../pages/ForgotPassword';
import Err404 from '../pages/Err404';

const Router = (props) => {
    const token = localStorage.getItem('token')

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="forgotPassword" element={<ForgotPassword />}></Route>
            {token &&
            <>
                <Route path="slip" element={<Slip />}></Route>
                <Route path="currencies" element={<Currencies />}></Route>
                <Route path="currencyPeriod" element={<CurrencyPeriod />}></Route>
                <Route path="editUser" element={<EditUser />}></Route>
            </>
            }
            <Route path="*" element={<Err404/>}></Route>
        </Routes>
    );
};

export default Router;
