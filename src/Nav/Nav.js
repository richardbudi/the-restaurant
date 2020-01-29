import React, {Component} from 'react';
import './Nav.css';
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav id="navbar">
      <h1 className="logo">
        <a href="/">
        <span className="text-primary">
        <FontAwesomeIcon icon={faUtensils}/> The</span> <span className="text-secondary">Restaurants</span> 
        </a>
      </h1>
      <ul>
        <li><a href="#restaurant-list">List</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;