import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle = {
    textDecoration: 'none'
  };
  return(
    <header className="header-style">
      <h1>Welcome to Pierre's General Store</h1>
      <div className="links">
        <Link style={linkStyle} to='/employee'>Employee's Only</Link> | <Link style={linkStyle} to='/'>Home</Link>
      </div>
      <style jsx>{`
          .header-style {
            background: lightgrey;
            margin-bottom: 25px;
            height: 80px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            margin-right: 25px;
          }
          .links {
            margin-right: 4.25vw;
            text-decoration: none;
          }
          .links {
            text-decoration: none;
          }

      `}
      </style>
    </header>
  );
};

export default Header;
