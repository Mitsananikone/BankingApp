import React from 'react';
import {NavLink} from "react-router-dom";
import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
      <NavLink to="/" className="navbar-brand"> BadBank</NavLink> 
        <Button color="default" className="navbar-toggler " type="button" data-toggle="collapse" data-target="navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
        </Button>

        <div className="collapse navbar-collapse text-primary" id="navbar-nav">
          <ul className="nav navbar-nav navbar-right ">

            <li className="nav-item slideHighlight">
              <NavLink to="createaccount/" className="nav-link" >Create Account</NavLink>
            </li>
            {/* <li className="nav-item">
              <Link to="login/" className="nav-link">Login</Link>
            </li> */}
            <li className="nav-item slideHighlight ">
              <NavLink to="withdraw/" className="nav-link">Withdraw</NavLink>
            </li>
            <li className="nav-item slideHighlight ">
              <NavLink to="deposit/" className="nav-link">Deposit</NavLink>
            </li>
         
            {/* <li className="nav-item">
              <Link to="balance/" className="nav-link">Balance</Link>
            </li> */}
            <li className="nav-item slideHighlight">
              <NavLink to="alldata/" className="nav-link">AllData</NavLink>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }

  export default NavBar;