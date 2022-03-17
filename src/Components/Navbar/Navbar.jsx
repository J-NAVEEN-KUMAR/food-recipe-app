import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand text-decoration-none">
            <Link to="/" className="text-decoration-none logo">
              NJ <span>Meals</span>
            </Link>
          </span>
          <button
            className="navbar-toggler toggle-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon toggle-btn"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link" aria-current="page">
                  <Link to="/categories" className="text-decoration-none logo">
                    Categories
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link  text-decoration-none"
                  aria-current="page"
                >
                  <Link to="/random" className="text-decoration-none logo">
                    Random
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
