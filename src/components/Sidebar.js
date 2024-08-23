import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/compose">Compose Email</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
