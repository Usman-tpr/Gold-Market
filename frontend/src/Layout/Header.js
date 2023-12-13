import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { useAuth } from '../Context/auth'
import {CgProfile} from 'react-icons/cg'
const Header = () => {
  const [auth,setAuth] = useAuth()
  const handlelogout = async () =>{
    setAuth({
      ...auth,user:null,token:""
    })
    localStorage.removeItem("auth")
  
  }
  return (
   
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" >Gold MArket</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to = '/' className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = '/sell'  className="nav-link">Sell</NavLink>
        </li>
      { auth.isExist ? (<>
       <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <CgProfile /> {auth.isExist.name}
  </a>
  <ul className="dropdown-menu">
    <li><NavLink className="dropdown-item" to = '/dashboard'> My Products</NavLink></li>
   
  </ul>
</li>

   
        <li className="nav-item">
          <NavLink to = '/register'  className="nav-link" onClick={handlelogout}>LogOut</NavLink>
        </li>
      </>):(<>
        <li className="nav-item">
          <NavLink to = '/register'  className="nav-link">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = '/login'  className="nav-link">Login</NavLink>
        </li>
      </>)}
      </ul>
    </div>
  </div>
</nav>

  
  )
}

export default Header