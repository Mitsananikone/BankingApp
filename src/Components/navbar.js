import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg ">
      <NavLink to="/" className="navbar-brand"> BadBank</NavLink> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-primary" id="navbar-nav">
          <ul className="nav navbar-nav navbar-right">

            <li className="nav-item">
              <NavLink to="createaccount/" className="nav-link" >Create Account</NavLink>
            </li>
            {/* <li className="nav-item">
              <Link to="login/" className="nav-link">Login</Link>
            </li> */}
            <li className="nav-item">
              <NavLink to="withdraw/" className="nav-link">Withdraw</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="deposit/" className="nav-link">Deposit</NavLink>
            </li>
         
            {/* <li className="nav-item">
              <Link to="balance/" className="nav-link">Balance</Link>
            </li> */}
            <li className="nav-item">
              <NavLink to="alldata/" className="nav-link">AllData</NavLink>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }

  export default NavBar;