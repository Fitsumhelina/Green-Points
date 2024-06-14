import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import BrowserRouter
import './header.css';
import images from "../../assets/images.png";
const imagesList = [
  {
    id: 1,
    src: images,
    alt: "Logo",
  },
];
function Header() {
  return (
    <Router> {/* Wrap your components with Router */}
      <header className='header'>
        <div className="logo">
        {imagesList.map((images) => (
        <img key={images.id} src={images.src} alt={images.alt} />
      ))}
          <h1><i className="h1"></i> Green Points</h1>
        </div>
        <nav class="nav">
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li>
            <a href="https://t.me/ethio_farmer_bot" className="get-started-button">Get started</a>
            </li>
            <li>
              <Link to="/login" className="login-button">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Router> 
  );
}

export default Header;
