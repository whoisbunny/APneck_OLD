/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import pay from '/assets/images/pay/pay.png'


const Checkout = () => {
  
  
  return <>
<section className="checkout p-24">
  <div className="container-xxl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-md-6">
        <h1 className="mb-4 text-3xl font-bold text-search">Payment Method</h1>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header p-0" id="headingTwo">
              <button className="btn col-12 btn-light btn-block text-start p-3 rounded-0 border-b border-gray-300" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div className="flex items-center justify-between">
                  <div className='w-1/2'>
                    <span>Paypal</span>
                  </div>
                  <div className='w-1/2'>
                    <img src={pay} alt="" className='w-full' />
                  </div>
                </div>
              </button>
            </div>
            <div id="collapseTwo" className="border-collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="card-body">
                <input type="text" className="form-control" placeholder="Paypal email" required/>
              </div>
            </div>
          </div>
          <div className="card m-auto">
            <div className="card-header p-0">
              <button className="btn col-12 btn-light btn-block text-start p-3 rounded-0" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div className="flex items-center justify-between">
                  <div className="w-1/2">
                  <span>Credit card</span>
                  </div>
                  <div className="icons w-1/2">
                    <img src={pay} alt="" className='w-full' />
                  </div>
                </div>
              </button>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="card-body payment-card-body">
                <span className="font-normal card-text">Card Number</span>
                <div className="input mb-4">
                  <i className="fa fa-credit-card"></i>
                  <input type="text" className="form-control" placeholder="0000 0000 0000 0000" required/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 mb-3">
                  <div>
                    <span className="font-normal card-text">Expiry Date</span>
                    <div className="input">
                      <i className="fa fa-calendar"></i>
                      <input type="text" className="form-control" placeholder="MM/YY" required/>
                    </div>
                  </div>
                  <div>
                    <span className="font-normal card-text">CVC/CVV</span>
                    <div className="input mb-4">
                      <i className="fa fa-lock"></i>
                      <input type="text" className="form-control" placeholder="000" required/>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500 certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 p-2">
        <h1 className=" mt-3 mb-3 text-2xl font-bold text-search">Fill the following details for shipping.</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div>
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" required />
          </div>
          <div>
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" required />
          </div>
          <div>
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div>
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div>
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div>
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div>
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="mt-5">
            <button id="button-linker" type="submit" >Proceed To Pay</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  </>;
}

export default Checkout