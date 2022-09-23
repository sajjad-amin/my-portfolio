import React, {useContext} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {clearLoggedInData, isUserLoggedIn} from "../../../Helper/auth";
import {UserContext} from "../../../App";
import {sendRequest} from "../../../Helper/http";
const Header = () => {
    const [user,setUser] = useContext(UserContext);
    const location = useLocation()
    const handleLogout = () => {
        sendRequest(
            '/authentication/logout',
            'DELETE',
            JSON.stringify({'profileAuthToken':user.token}),
            null,
            response => {
                if(response.success){
                    setUser([]);
                    clearLoggedInData();
                }
            }
        );
    }
    return (
        <nav id="header" className="navbar navbar-expand-sm navbar-dark pe-lg-4 mb-2">
          <div className="container-fluid">
              {
                  location.pathname.includes('dashboard') &&
                  <a className="navbar-brand ms-3" href="/dashboard">{isUserLoggedIn(user) && user.name}</a>
              }
              <button className="navbar-toggler ms-auto"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar" aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
              {
                  !location.pathname.includes('dashboard') &&
                  <div className="collapse navbar-collapse" id="navbar">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <NavLink exact={true} activeClassName="active-page" className="nav-link" to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink activeClassName="active-page" className="nav-link" to="/about">About</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink activeClassName="active-page" className="nav-link" to="/projects">Projects</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink activeClassName="active-page" className="nav-link" to="/blog">Blog</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink activeClassName="active-page" className="nav-link" to="/live">Live</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink activeClassName="active-page" className="nav-link" to="/contact">Contact</NavLink>
                          </li>
                      </ul>
                  </div>
              }
              {
                  (location.pathname.includes('dashboard') && isUserLoggedIn(user)) &&
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <button className="btn btn-b" onClick={handleLogout}>Logout</button>
                      </li>
                  </ul>
              }

          </div>
        </nav>
    );
};

export default Header;