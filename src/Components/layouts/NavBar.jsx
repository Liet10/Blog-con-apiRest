import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="nav">
    <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/articles">Artículos</NavLink></li>
        <li><NavLink to="/tocreate">Crear Artículo</NavLink></li>
    </ul>
</nav>
  )
}
