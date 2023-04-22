import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import web from "./Images/hero.jpg";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [show, setshow] = useState(false);
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();

  return (
    <>
      <sectiion className='Navbar-bg'>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">

            <img src={web} alt='logo' className='logo' style={{ width: "140px", height: "40px" }} />


            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              onClick={() => { setshow(!show) }}  >
              {/* here used Hook */}
              <span className="navbar-toggler-icon"></span>
            </button>                                 {/* here used Hook */}
            <div className={`collapse navbar-collapse ${show ? "show" : " "}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/service">Service</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                </ul>


                <ul  className="navbar-nav">
                  <li className="nav-item">
                 
                  
                  {isAuthenticated && 
                  (<li>
                     <p className='abhishek'>Welcome, You Logged In As</p>
                    <h5>{user.name}</h5>
                  </li>)

                  }
                  </li>
                <li  className="nav-item" >
                  {isAuthenticated ? (<button className='btn btn-style'
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out </button>)
                     :
                    (<button className='btn btn-style' onClick={() => loginWithRedirect()}>Log In</button>
                    )
                  }
                </li>

              </ul>

            </div>
          </div>
        </nav>

      </sectiion>
    </>
  )
}



export default Navbar;