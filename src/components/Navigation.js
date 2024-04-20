import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className='container'>
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item">
                    <Link to="/" className="navigation-link">Home</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/Info" className="navigation-link">About me</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/City" className="navigation-link">My city</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/Book" className="navigation-link">My favourite book</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/Less3" className="navigation-link">Users</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/TextRedactor" className="navigation-link">Text redactor</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/Less4" className="navigation-link">Less 4</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/CommentSystem" className="navigation-link">Comment System</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/ClickCounter" className="navigation-link">Click Counter</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Navigation;