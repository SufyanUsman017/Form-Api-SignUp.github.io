import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

const navigate = useNavigate();
    
  return (
    <div>
       <header>
        <nav class="navbar">
            <div class="logo">
                <img src="https://images.pexels.com/photos/27195708/pexels-photo-27195708/free-photo-of-meal-with-vegetables-on-dark-plate.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Logo" />
            </div>
            <ul className="nav-links">
          {/* Use Link correctly */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
            <div class="auth-buttons">
                <button class="btn signup" onClick={()=>{navigate("/signup")}} >Sign Up</button>
                <button class="btn signin" onClick={()=>{navigate("/signin")}}>Sign In</button>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Navbar
