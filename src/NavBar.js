import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-decor">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/service">Services</Link>
              </li>
            </ul>
            {localStorage.getItem('login') ? <> <form className="d-flex">
              <Link onClick={() => localStorage.clear("token")} className="btn btn-primary btn-style" to="/login" role="button">Logout</Link>
            </form>
            </> : <><form className="d-flex">
              <Link className="btn btn-primary btn-style" to="/login" role="button">LogIn</Link>
            </form>
              {/* <form className='d-flex'>
                <Link className="btn btn-primary btn-style" to="/register" role="button">Register</Link>
              </form>
              <form className='d-flex'>
                <Link className="btn btn-primary btn-style" to="/reg" role="button">register</Link>
              </form>
              <form className='d-flex'>
                <Link className="btn btn-primary btn-style" to="/log" role="button">LogIn</Link>
              </form> */}
              </>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;