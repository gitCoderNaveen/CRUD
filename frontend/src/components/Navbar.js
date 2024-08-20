import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/application.css'

export default function Navbar() {
  return (
    <nav className='navbarDiv'>
      <NavLink className='nav-text' to='/application'>Application</NavLink>
      <NavLink className='nav-text' to='/getdata'>Get Details</NavLink>
    </nav>
  )
}
