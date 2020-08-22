import React from "react";
import { Link } from "react-router-dom";
import RssIcon from '../assets/rss-square.png';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <img className='rss-icon' src={RssIcon} alt="RSS icon"/>
                <h1><Link to='/'>Channel</Link></h1>
            </div>
            <nav>
                <a href="https://en.wikipedia.org/wiki/RSS" target='_blank' rel='noopener noreferrer'>What is RSS?</a>
                <Link to='/guide'>Guide</Link>
            </nav>
        </div>
    )
}