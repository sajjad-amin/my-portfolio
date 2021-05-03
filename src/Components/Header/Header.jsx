import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark pe-lg-4 mb-5">
          <div className="container-fluid">
            <button className="navbar-toggler ms-auto"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar" aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav fs-5 ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/projects">Projects</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/blog">Blog</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
    );
};

export default Header;