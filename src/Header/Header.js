import React from 'react';
import "./Header.css"
const Header = () => {
  return (
    <div>
      <header id="showcase">
        <div className="showcase-content">
          <h1 className="l-heading">Welcome to The Restaurants</h1>
          <p className="lead">
            The best website to find the best place to eat in Stockholm.
          </p>
          <a href="#restaurant-list" className="btn">
            See Restaurant
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
