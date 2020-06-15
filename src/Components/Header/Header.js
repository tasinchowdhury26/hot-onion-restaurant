import React from 'react';
import './Header.css';
import logo from '../../Resources/logo2.png'

const Header = () => {
    return (
        <div className='header-area'>
            <nav>
                    <img className='logotop' src={logo} alt="logoTop"/>
                    <button className='btn btn-danger'>Login</button>
            </nav>
            <div className='slogan'>
                <h1>Best food waiting for your belly</h1>
                <br/>
                <input className='searchbar' type="text" placeholder='Search food items'/>
                <button className='btn btn-danger search-button'>Search</button>
            </div>
        </div>
    );
};

export default Header;