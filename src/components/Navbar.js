import React from 'react';
import ig from '../resources/instagram.svg'
import twitter from '../resources/twitter.svg'
import tiktok from '../resources/tiktok.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left-links">
                <a href="/about">Meet The Team</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact Us</a>
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

