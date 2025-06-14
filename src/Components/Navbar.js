import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <div>
      {/* Bootstrap Navbar with dynamic mode styling (light/dark) */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border-bottom border-body`}>
        <div className="container-fluid">
          
          {/* Brand/Logo linked to home */}
          <Link className="navbar-brand" to="/">{props.objects.title}</Link>
          
          {/* Toggle button for collapsing the navbar on small screens */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible navbar content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              {/* Home link */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home" >Home</Link>
              </li>

              {/* About link */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.objects.about}</Link>
              </li>

            </ul>
          </div>

          {/* Toggle switch for dark/light mode */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {`${props.mode === 'light' ? 'Enable DarkMode' : 'Disable DarkMode'}`}
            </label>
          </div>
          
        </div>
      </nav>
    </div>
  )
}

// PropTypes to enforce expected prop structure
Navbar.propTypes = {
  objects: PropTypes.shape({
    title: PropTypes.string,
    about: PropTypes.string
  })
}

// Default props in case nothing is passed
Navbar.defaultProps = {
  objects: { title: "Word", about: "About" }
}
