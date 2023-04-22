import React from 'react'
import her from '../Components/Images/error.png';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
  <div className="container mt-5 ayu">
    <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        
        <img src={her} className='text-center ' id='error-img'/>
         <br/><br/>
         <button id='butto' >
         <NavLink to="/" className="error">Go Back To Home</NavLink>
         </button>
       

      </div>
      <div className="col-lg-2"></div>
    </div>
  </div>
  )
}

export default Error;