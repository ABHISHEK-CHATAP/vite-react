import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
   <footer className='mt-5'>
    <div className="container ">
        <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
               <div className="row">
                <div className="col-lg-3 col-6">
                    <h2>Company</h2>
                   <p className='main-hero-para'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, vitae obcaecati placeat ullam eaque iure.
                   </p>
                </div>

                <div className="col-lg-3 col-6">
                    <h2>Get in Touch with</h2>
                    <input className='contro' placeholder='your Email'/>
                    <button className='btn'>submit</button>
                       
                </div>

                <div className="col-lg-3 col-6">
                    <h2>Call Us</h2>
                    <ul>
                        <li>
                            <p className='main-hero-para'>+91 9130776269</p>
                        </li>
                        <li>
                        <p className='main-hero-para'>+91 8459147185</p>
                        </li>
                       
                    </ul>
                </div>

                <div className="col-lg-3 col-6">
                    <h2>Follow us</h2>
                               <div className="row py-4">
                               
                                <div className="col-3 mx-auto">
                                  <a href='https://www.linkedin.com/in/abhishek-chatap/'>
                                    <i class='fa-brands fa-linkedin fa-2xl' id='iconnn' style={{ color: '#fff' }}></i>
                                  </a>
                                </div>
                                <div className="col-3 mx-auto">
                                  <a href='https://github.com/ABHISHEK-CHATAP'>
                                    <i class='fa-brands fa-github fa-2xl' id='iconnn' style={{ color: '#fff' }}>
                                    </i>
                                  </a>
                                </div>
                                <div className="col-3 mx-auto">
                                  <a href='/'>
                                    <i class='fa-brands fa-instagram fa-2xl' id='iconnn' style={{ color: '#fff' }}></i>
                                  </a>
                                </div>
                               </div>
                              

                </div>
               </div>
                             <hr/>
                      <div className="mt-5 ">
                        <p className='main-hero-para w-100 text-center'>Copyright @ 2023 ABHISHEK. All rights reserved .</p>
                      </div>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer;