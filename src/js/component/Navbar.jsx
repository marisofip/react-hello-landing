import React from "react";

function Menu()  {
	return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid flex-row flex-wrap">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span clclassName="navbar-toggler-icon"></span>
      </button>
      <div className=" collapse navbar-collapse" id="navbarNav">
      
          <ul className="navbar-nav flex-row flex-wrap ms-md-auto" >
          <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
              </li>
          </ul>
          
      </div>
  </div>
</nav>

    );
}

export default Menu;