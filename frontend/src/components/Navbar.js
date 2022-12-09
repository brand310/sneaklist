import React, { useState } from 'react'
import {TiThMenu,TiTimes} from 'react-icons/ti'
import logo from './images/sneaklistNew2Logo.png'


import './Navbar.css'

const Navbar = () => {
    //when screen is shortened nav bar chnages
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='menu-lines' onClick={handleClick}>
                    {click ? (<TiTimes size={45}/>)
                        : (<TiThMenu size={45}/>)}

                </div>
                <ul className={click ? "nav-links active" : "nav-links"}>
                    <li className='nav-item-names'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item-names'>
                        <a href='/create' onClick={closeMenu}>New Shoe</a>
                    </li>
                    <li className='nav-item-names'>
                        <a href='/sneaks' onClick={closeMenu}>Sneaks Gallery</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>SNEAKLIST</h1>
//       <div className="sneaklistlogo"></div>
//       <div className="links">
//         <a href="/">Home </a>
//         <a href="/create">New Shoe</a>
//       </div>
//     </nav>
//   );
// };

export default Navbar
