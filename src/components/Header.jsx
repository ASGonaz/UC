import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {

  return (
	<>
	<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <NavLink className="navbar-brand fw-bold" to="/"><img src="/assets/images/Home/UCIMG.png" alt="logo" /></NavLink>
   {(localStorage.getItem("trans") == undefined)? <span></span> :  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon fa fa-bars"></span>
    </button>}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
		  {(localStorage.getItem("trans") == undefined)? <span></span> : <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>}
       {(localStorage.getItem("trans") == undefined)? <span></span> : <li className="nav-item"><NavLink to="/All" className="nav-link">All</NavLink></li>}
    
      </ul>
	  
    </div>
  </div>
</nav>
  
	</>
  )
}

export default Header