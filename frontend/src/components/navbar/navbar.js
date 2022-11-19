import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import Imagenes from "../imagenes/Imagenes"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-ligth bg-white sticky-top">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand ms-3"
        >
          <img src={Imagenes.logo}alt="logo recursos humanos catamarca" />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end me-4" id="navbarScroll">
          <ul className="navbar-nav mb-2 mb-lg-0 hover">
            <li className="nav-item px-2">
              <NavLink
                to="/Inicio"
                className={({ isActive }) => {
                  return isActive ? "active nav-link" : "nav-link text-dark";
                }}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/Trabajos"
                className={({ isActive }) => {
                  return isActive ? "active nav-link" : "nav-link text-dark";
                }}
              >
                Trabajos
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/Cursos"
                className={({ isActive }) => {
                  return isActive ? "active nav-link" : "nav-link text-dark";
                }}
              >
                Cursos
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/Contacto"
                className={({ isActive }) => {
                  return isActive ? "active nav-link" : "nav-link text-dark";
                }}
              >
                Contacto
              </NavLink>
            </li>
            <li><Link to="/Empresas"><button className="btn btn-success">Soy empresa</button></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;