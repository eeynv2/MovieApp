import React from 'react'
import './Navbar.css';

interface NavBarProps{
  name: string;
  
}

function Navbar(props: NavBarProps) {
  //const searchStyle = {font-colo: "white"};
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light bg-dark justify-content-between">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white" aria-disabled="true" href = "/">Disabled</a>
        </li>
      </ul>
      <div className="d-flex justify-content-between text-white">
      <form className="d-flex bg-dark text-white" role="search">
        <input className="form-control me-2 bg-dark " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}



export default Navbar

