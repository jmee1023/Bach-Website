import React from 'react';
import { Link } from 'react-router-dom'
import ig from '../resources/instagram.svg'
import twitter from '../resources/twitter.svg'
import tiktok from '../resources/tiktok.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left-links">
                <Link to="/">Home</Link>
                <Link to="/team">Meet the Team</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="right-icons">
                <a href="https://www.instagram.com">
                    <img src={ig} alt="Instagram" />
                </a>
                <a href="https://www.twitter.com">
                    <img src={twitter} alt="Twitter" />
                </a>
                <a href="https://www.tiktok.com">
                    <img src={tiktok} alt="TikTok" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

