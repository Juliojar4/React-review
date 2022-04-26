import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logout from '../../services/logout'

const handleWidthScreen = () => (window.innerWidth <= 768 ? true : false);

const Navigation = (props) => {
    function refreshPage(logout) { 
        logout()
        window.location.reload(); 
    }
    const [isMobile, setIsMobile] = useState(handleWidthScreen());
    const [isActive, setIsActive] = useState(false);
    const token = localStorage.getItem('token')
    useEffect(() => {
        handleWidthScreen();
        window.addEventListener('resize', () => setIsMobile(handleWidthScreen));
    }, [isActive]);
    
    const WrapNavigation = () => {
        return (
            <nav className="navigation">
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Home
                        </Link>
                    </li>
                    {!token &&
                        <li>
                            <Link
                                to="/register"
                                className="text-white font-bold text-center text-xl"
                                onClick={() => setIsActive(false)}
                            >
                                Register
                            </Link>
                        </li>
                    }
                    <li>
                        <Link
                            to="/login"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Login
                        </Link>
                    </li>
                    {token &&
                        <li>
                            <Link
                                to="/editUser"
                                className="text-white font-bold text-center text-xl"
                                onClick={() => setIsActive(false)}
                            >
                                Edit User
                            </Link>
                        </li>
                    }
                    {token &&
                        <li>
                            <Link
                                to="/slip"
                                className="text-white font-bold text-center text-xl"
                                onClick={() => setIsActive(false)}
                            >
                                Slip
                            </Link>
                        </li>
                    }
                    {token &&
                        <li>
                            <Link
                                to="/currencies"
                                className="text-white font-bold text-center text-xl"
                                onClick={() => setIsActive(false)}
                            >
                                Currency Cotation
                            </Link>
                        </li>
                    }
                    {token &&
                        <li>
                            <Link
                                to="/currencyPeriod"
                                className="text-white font-bold text-center text-xl"
                                onClick={() => setIsActive(false)}
                            >
                                Currency Period
                            </Link>
                        </li>
                    }
                    {token &&
                            <li>
                                <Link  
                                    onClick={() => refreshPage(logout)}
                                    to="/"
                                    className="text-white font-bold text-center text-xl"                                  
                                >
                                    logout
                                </Link>
                            </li>
                    }
                </ul>
            </nav>
        );
    };

    return (
        <>
            {isMobile ? (
                <div className="wrap-navigation">
                    <div
                        className={`slide-menu ${
                            isActive && 'slide-menu-open'
                        }`}
                    >
                        <WrapNavigation />
                    </div>
                    <div
                        className="hamburguer"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <span className="hamburguer-line" />
                        <span className="hamburguer-line" />
                        <span className="hamburguer-line" />
                    </div>
                </div>
            ) : (
                <WrapNavigation />
            )}
        </>
    );
};

export default Navigation;
