import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const handleWidthScreen = () => (window.innerWidth <= 768 ? true : false);

const Navigation = (props) => {
    const [isMobile, setIsMobile] = useState(handleWidthScreen());
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        handleWidthScreen();
        window.addEventListener('resize', () => setIsMobile(handleWidthScreen));
    }, [isActive]);

    console.log(isActive);
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
                    <li>
                        <Link
                            to="/register"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/editUser"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Edit User
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/slip"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Slip
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/currencies"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Currency Cotation
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/currencyPeriod"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Currency Period
                        </Link>
                    </li>
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
