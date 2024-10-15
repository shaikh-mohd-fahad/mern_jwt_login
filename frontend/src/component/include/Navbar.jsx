import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const { logout } = useContext(AuthContext);
    const navigte=useNavigate()
    const handleLogout=()=>{
      logout()
        navigte("/")
    }
    const navList=(
        <>
        <Link to="/" className='m-2'><li>Home</li></Link>
        <Link to="/profile" className='m-2'><li>Profile</li></Link>

        <Link to="/login" className='m-2'> <li>Login</li></Link>
        <Link  className='m-2' onClick={handleLogout}> <li >Logout</li></Link>
        
        </>
    )
  return (
    <>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navList}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navList}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </>
  )
}

export default Navbar
