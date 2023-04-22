import React from 'react'

const Contact = () => {
  return (
    <>
      <h1 className='heading text-center mt-5'> Feel Free To Contact Us</h1>
      <div className="container-fluid">
        <div className="row">
          <iframe className='mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59437.53304082654!2d79.29066761290298!3d21.395974836308152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4d39e615dc34d%3A0xc91ff4b4db2787f8!2sRamtek%2C%20Maharashtra%20441106!5e0!3m2!1sen!2sin!4v1682096199047!5m2!1sen!2sin"
            width="100%" height={250} style={{ border: 0 }} allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>

      <div className="container mt-5 form-check">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">

            <div className="contact-form">
              <form action='https://formspree.io/f/mrgvrkvp' method='POST' className='contact-inputs'>

                <input type='text' className='contro'  name='username'
                  placeholder='username' autoComplete='off'
                  required />

                <input type='email'  className='contro' name='Email'
                  placeholder='Email' autoComplete='off'
                  required />
               
                <textarea name='message' className='contro' cols='30'rows='6'
                      autoComplete='off' required ></textarea>

               <input className='btn-contact btn' type='submit' value='send' />
              </form>
            </div>


          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>

    </>
  )
}

export default Contact;