import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import Navigation from './components/Navigation';
import ThemeContext from './utility/context/ThemeContext';
import Message from './components/Message/message';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ThemeContext>
                <Navigation />
                <Message/>
                <App />
            </ThemeContext>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
