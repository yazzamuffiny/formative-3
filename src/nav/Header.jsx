import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
import { BsList } from "react-icons/bs";


const Header = () => {
  const [menuIsOpen, openMenu] = useState(false)

  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle("no-scroll")
  }
  return (
    <>
      <div className='header'>
        <div id='logo'>
          <Link to="/">NewsAPI</Link>
        </div>

        <ul id='menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div id='menuContainer'>
          <button id='menuButton' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
            <BsList id='hamburgerIcon'/>
          </button>
        </div>
      </div>

      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
    </>
  )
}

export default Header