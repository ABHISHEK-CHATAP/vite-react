import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context';


const Herosection = (props) => {

  const {fname, age} = useGlobalContext();

  return (
    <>
      <div className="container mt-5">
        <div className="row">
           <div className="col-lg-2"></div>
           <div className="col-lg-4 main-head">
            <p >This is ME</p><br/>
            <h1 className='unicorn'>{props.name}</h1>
           
            <h6 className='Abhishek'>I'M {fname}, Age is {age}. A frontend Developer, Working on framework of React.Js<br/> and having Knowledge about Backend and it's Working</h6>
           <button className='btn' >
            <NavLink to="/contact" className="btn-contact">HIRE ME</NavLink>
           </button>
           </div>
           <div className="col-lg-4">
            <img src={props.img} alt='hero2img' className='img-fluid'/>
           </div>
           <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  )
}

export default Herosection;