import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

interface NavBarProps {
  name: string;
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

function Navbar(props: NavBarProps) {

  //const searchStyle = {font-colo: "white"};
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light bg-dark justify-content-between">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AddMovie" className="nav-link active text-white">
                  Add Movie
                </Link>
              </li>



            </ul>
            <div className="d-flex justify-content-between text-white">
              <input className="form-control me-2 bg-dark " type="search" value={props.searchQuery} onChange={props.handleSearchChange} placeholder="Search Movies" aria-label="Search" />
            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}



export default Navbar;

