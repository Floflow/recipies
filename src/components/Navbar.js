import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <p>Made with Spoonacular API</p>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

