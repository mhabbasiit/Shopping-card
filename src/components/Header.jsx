import React from 'react'
import './main.css';
import Logo from '../img/logo.png';
import { NavLink } from "react-router-dom";
// import Card from './Card';
import { useContext } from 'react'
import { TempChage } from './Card'


function Header() {
  const {count, setCount} = useContext(TempChage)
  return (
    
    <>
      <div className="container " >
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary pl-4">
              <div className="container-fluid">
                <img src={Logo} alt="logo" href="/#" height="60px" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Home</NavLink >
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Products</NavLink >
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to="/Login" className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")} >Login</NavLink >
                        </li>
                        <li>
                          <NavLink to="/Registration" className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")} >Registration</NavLink >
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <NavLink to="/Logout" className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")} >Sign out</NavLink >
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart card-shop" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <CompA/>
                      {count}

                      </a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header