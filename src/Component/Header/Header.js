import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <header>
      <div className="logo">
        <h2>Shopping App</h2>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header
