import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  
  return (
    <nav className="navbar navbar-dark bg-dark custom">

      <Link to='/'>
        <span className="navbar-home">
          Weather App
        </span>
      </Link>
      
      <SearchBar onSearch={onSearch} />

      <Link to='/about'>
        <span className="navbar-about">Acerca de</span>
      </Link>
    </nav>
  );
};

export default Nav;
