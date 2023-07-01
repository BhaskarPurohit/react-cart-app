import {FiShoppingBag} from "react-icons/fi"
import React from 'react'
import "../styles/header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <h2>Logo here</h2>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}><FiShoppingBag/></Link>
        </div>
    </nav>
  )
}

export default Header