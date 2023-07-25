import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='upper-header'>
        <ul>
          <Link to={"/"}><li>Return</li></Link>
          <Link to={"/help"}><li>Help</li></Link>
          <Link to={"/register"}><li>Register/Sign in</li></Link>
        </ul>
      </div>
      <hr></hr>
      <div className='bottom-header'>
        <Link to={"/collection"}><i className="fa-solid fa-magnifying-glass search"></i></Link>

        <nav>
          <ul>
            <Link to={"/shop"}><li>SHOP</li></Link>
            <Link to={"/collection"}><li>COLLECTION</li></Link>
          </ul>
          <Link to={"/"}><p className='logo'>Macc<span>Essentials</span></p></Link>
          <ul>
            <Link to={"/best-sellers"}><li>BESTSELLERS</li></Link>
            <Link to={"/about-us"}><li>ABOUT US</li></Link>
          </ul>
        </nav>
        <div className='icons'>
          <i className='fa-regular fa-user'></i>
          <i className='fa-regular fa-bell'></i>
        </div>
      </div>
    </header>
  )
}

export default Header