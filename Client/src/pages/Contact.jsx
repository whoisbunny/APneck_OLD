/* eslint-disable no-unused-vars */
import React from 'react'

const contact = () => {
  return <>
<section className="contact-wrapper p-5">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="col-span-1 text-center">
            <h1 className="font-bold text-4xl text-search">Reach Out to Us</h1>
            <p className="text-3xl text-search">We are only a step away from you</p>
          </div>
        </div>
      </div>
    </section>
  
 <div className="contact-wrapper-details p-5">
      <div className="container-xxl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="p-3">
            <div className="relative card mx-auto w-full aspect-w-16 aspect-h-9">
              <iframe
                className="absolute inset-0 w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4778664168934!2d72.59861242476974!3d23.00622006693926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c51048cefb%3A0x777f51782a8b7a1a!2sKankaria%20Lake!5e0!3m2!1sen!2sin!4v1713100627054!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="p-3">
            <div className="carrd p-5 bg-lighter2">
              <h2 className="footer-title mb-3 font-bold">Contact Us</h2>
              <p className="mb-2"><b>Address:</b> Kankaria Lake, Ahmedabad, Gujarat 380002</p>
              <p className="mb-2"><b>Phone:</b> <a href="tel:+1234567890" className="footer-tel">Call us at +91 8128759645</a></p>
              <p className="mb-4"><b>Hours:</b> From 8 a.m To 6 p.m</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque consequuntur impedit! Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic veniam unde numquam in ullam laudantium odit explicabo itaque! Voluptate similique, accusantium consequatur provident soluta quaerat maxime adipisci vero sed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="contact-message p-12 w-full">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
            <div className="card p-5 m-16">
              <h2 className="text-center mb-4">Leave Us A message</h2>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="columns-md-6">
                    <input type="text" className="form-input" placeholder="First name" aria-label="First name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-input" placeholder="Last name" aria-label="Last name" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label mb-3">Enter Your Email address</label>
                    <input type="email" className="form-input" id="email" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Type in your message</label>
                    <textarea className="form-textarea" id="message" rows="3"></textarea>
                  </div>
                  <div className="col-12 text-center gap-2">
                    <button id="button-link" type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default contact