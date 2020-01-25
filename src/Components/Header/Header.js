import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-block">
                <NavLink to="/">
                <h1>Contacts</h1>
                </NavLink>
            <NavLink to="/new/contact" className="add-contact">Add new Contact</NavLink>
            </div>
        </header>
    );
};

export default Header;