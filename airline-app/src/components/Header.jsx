import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const getActiveClass = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="site-header">
            <div className="header-left">
                <h1>
                    <span className="blue">AIR</span> <span className="white">LINES</span>
                </h1>
                <span className="subtitle">INTERNATIONAL TRAVEL</span>
            </div>
            <nav className="main-nav">
                <Link to="/" className={getActiveClass('/')}>
                    HOME
                </Link>
                <Link to="/aircraft" className={getActiveClass('/aircraft')}>
                    OUR AIRCRAFT
                </Link>
                <Link to="/safety" className={getActiveClass('/safety')}>
                    SAFETY
                </Link>
                <Link to="/charters">
                    CHARTERS
                </Link>
                <Link to="/contacts">
                    CONTACTS
                </Link>
            </nav>
            <div className="header-functionality">
                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" className="search-input" placeholder="Search..." />
                    <button type="submit" className="search-button">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </div>
            <Link to="/login" className="icon-link"><i className="bi bi-person"></i></Link>
        </header>
    );
};

export default Header;