import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>   
        <Link to={"/"}><img src="../../img/cropped-logoWEB-320x110-4444-01.png" alt="logo" /></Link>
         <Menu />
    </div>
  )
}

export default Header
