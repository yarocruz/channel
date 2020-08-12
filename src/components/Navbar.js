import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='navbar'>
            <h1 className="logo"><Link to='/'>Channel</Link></h1>
            <nav>
                <a href="https://en.wikipedia.org/wiki/RSS" target='_blank' rel='noopener noreferrer'>What is RSS?</a>
                <Link to='/guide'>Guide</Link>
            </nav>
        </div>
    )
}