import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Header.css';

const Header = () => {
    return(
        <header>
            <Link to="/">
                <h1>
                    WACAYO
                </h1>
            </Link>
        </header>
    )
};

export default Header;