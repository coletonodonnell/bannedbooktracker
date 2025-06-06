import {BrowserRouter, Link, Router, useLocation, useNavigate} from 'react-router';
import React, {useState} from 'react';
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import book_icon from "../pictures/book_icon.png";
import account_icon from "../pictures/account_icon.png";
import message_icon from "../pictures/message_icon.png";
import notif_icon from "../pictures/notif_icon.png";

function NavBar() {

    const location = useLocation();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

     // Array of paths where the navbar should be hidden
    const noNavbar = ['/login', '/signup', '/reset'];

    // Check if the current path is in the noNavbarPaths array
    const shouldHideNavbar = noNavbar.includes(location.pathname);

    //search on enter
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && query.trim()) {
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    }

  return shouldHideNavbar ? null : (

      <Container>
        <Navbar className="navbar">
            <Navbar.Brand href="/">
                <img
                src={book_icon}
                alt="book icon"
                className="logo"/>
            </Navbar.Brand>
            <Link to="/" className="navbar-link">HOME</Link>
            <Link to="/lists" className="navbar-link">LISTS</Link>
            <Link to="/browse" className="navbar-link">BROWSE</Link>
            <div className="spacer2"></div>
            <input
              type="search"
              placeholder="Search"
              className="navbar-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{height: 30}}
            />
            <div className="spacer"></div>
            <img
                src={notif_icon}
                alt="notification icon"
                className="icon"/>
            <img
                src={message_icon}
                alt="message icon"
                className="icon"/>
            <Link to="/accounts" style={{ alignSelf: "flex-end" }}>
            <img
                src={account_icon}
                alt="account icon"
                className="icon"/>
            </Link>
        </Navbar>
      </Container>
  );
}

export default NavBar;