import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Space Origin
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/planet' className='nav-links' onClick={closeMobileMenu}>
                            Planets
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/spacecrafts' className='nav-links' onClick={closeMobileMenu}>
                            Spacecrafts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-links'>
                            <img alt="logout" src="https://img.icons8.com/cotton/30/000000/logout-rounded-left.png" />
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
    );
}

export default Navbar;