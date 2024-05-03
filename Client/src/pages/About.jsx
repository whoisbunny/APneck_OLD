/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import blog1 from '/assets/images/blog/blog-1.jpg'
import blog2 from '/assets/images/blog/blog-2.jpg'
import blog3 from '/assets/images/blog/blog-3.jpg'
import blog4 from '/assets/images/blog/blog-4.jpg'
import a6 from '/assets/images/about/a6.jpg'
import video from '/assets/images/about/1.mp4'
// import Marquee from "react-fast-marquee";
import orders from '/assets/images/icons/icon1.png'
import orders1 from '/assets/images/icons/icon2.png'
import orders2 from '/assets/images/icons/icon3.png'
import orders3 from '/assets/images/icons/icon4.png'
import orders4 from '/assets/images/icons/icon5.png'

const About = () => {
  return <>
<section className="about-wrapper p-5 flex justify-center items-center">
  <div className="container mx-auto">
    <div className="row">
      <div className="col-12 w-full">
        <div className="shop-details text-center">
          <h1 className="text-white text-4xl font-bold">#Know Us</h1>
          <p className="text-white text-3xl">Get to know us more</p>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="about-us p-5">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-9">
      <div className="flex justify-center md:justify-start">
        <img src={a6} alt="" className="p-5" />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="mb-4 font-bold text-center text-search text-4xl">Who are we?</h1>
        <p className="text-center md:text-left mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quibusdam tempore unde aperiam, consectetur harum a eum error, <br />
          libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
        </p>
        <p className="text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quibusdam tempore unde aperiam, consectetur harum a eum error, <br />
          libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
        </p>
      </div>
    </div>
  </div>
</section>


{/* <section className="about-app p-5">
  <h2 className="text-3xl md:text-4xl text-center mb-4">Download our <a href="#" className="text-blue-500">App</a></h2>
  <div className="max-w-md mx-auto p-5">
    <video loop muted autoPlay src={video} className="w-full"></video>
  </div>
</section> */}


  <section className="abouts p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <h1 className='mb-3'>What our customers say...</h1>
          <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
        </div>
        <div className="col-12 col-md-6 p-3">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={blog1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Marvel Clein</h5>
                <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Tristian Ann</h5>
                      <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Phillip Omosh</h5>
                      <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                  </div>
              
                </div>
              </div>
            </div>
            
            <div className="col-12 p-3">
            {/* <Marquee className='p-2 slide'> */}
              <div>
              <img src={orders} alt="" className='img-fluid'/>
              <p className="card-text mb-2">Fast Orders</p>
              </div>
              <div>
              <img src={orders1} alt="" className='img-fluid'/>
              <p className="card-text mb-2">Quick Shipping</p>

              </div>
              <div>
              <img src={orders2} alt="" className='img-fluid'/>
              <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
              <img src={orders3} alt="" className='img-fluid'/>
              <p className="card-text">24/7 Support</p>
              </div>
              <div>
              <img src={orders4} alt="" className='img-fluid'/>
              <p className="card-text">Online Orders</p>
              </div>
            {/* </Marquee> */}
            </div>
      </div>
    </div>
  </section>
  </>;
}

export default About