import React from 'react';
export default function Navbar() {
    return <nav className="nav">
       <a href='/'className='site-title'>Clear Opticals</a>
       <ul>
            <li> <a href='/Login'>Login</a> </li>
            <li> <a href='/Locations'>Locations</a></li>
            <li> <a href='/pricing'>Pricing</a></li>
            <li> <a href='/about'>About</a></li>
        </ul> 
    </nav> 
};