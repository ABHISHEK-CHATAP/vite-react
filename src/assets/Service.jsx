import React, { useEffect, useState } from 'react'


const Service = () => {
  const [images, setImages] = useState([]);


  useEffect(() => {
    fetch(`https://picsum.photos/v2/list`)
      .then(response => response.json())
      .then(photos => setImages(photos))
      .catch(err => cpnsole.log(err))
  }, [])


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">

            <h1 className='main text-center'>Our Services</h1>
            <br />
            <div className="row gy-5 dib">
              {
                images.map((val) => {
                  return (
                    <div className="col-lg-4 col-6 col-md-6  pa2 dib ">
                      <div className="card  dib  ">
                        <img src={val.download_url} class="card-img-top" alt='logo' />
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">{val.author}</h5>
                          <p className="card-text" id='card-texxtt'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, neque accusantium saepe delectus deleniti officiis quis culpa distinctio officia rerum repellat.</p>
                          <a href="#" class="btn btn-primary">Learn</a>
                        </div>
                      </div>

                    </div>
                  )
                })

               }

            </div>










          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  )
}

export default Service;