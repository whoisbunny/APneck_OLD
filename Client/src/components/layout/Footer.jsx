import { BsDiscord, BsFacebook, BsSlack, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="block p-3">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center md:justify-start">
            <div className="md:w-1/3 lg:w-1/3 md:mb-0 mb-4 ">
              <h2 className="border-b-[2px] border-b-darken w-[30%] mb-3 text-2xl ">
                <b className="font-bold font-weight: 400; text-[24px]">
                  Contact
                </b>
              </h2>
              <div className="mb-3">
                <p>
                  <b>Address:</b> Thika town, Naltex building, 2nd floor
                </p>{" "}
              </div>
              <div className="mb-3">
                <p>
                  <b>Phone:</b>{" "}
                  <Link to="Call" className="footer-tel text-darken" href="tel:+1234567890">
                    Call us at +91 8128759645
                  </Link>
                </p>{" "}
              </div>
              <div className="mb-4">
                <p>
                  <b>Hours:</b> From 8 a.m To 6 p.m
                </p>{" "}
              </div>
              <div className="mb-3">
                <p>
                  <b>Follow the developer</b>
                </p>{" "}
              </div>
              <div className="socials flex gap-8 mx-8 text-darken">
                <Link
                  to="https://discord.com/channels/1027937184768081950/1027937184768081952"
                  id="footer-link"
                  target="_blank"
                  className="gap-3"
                >
                  <BsDiscord />
                </Link>
                <Link
                  to="https://twitter.com/eclarkhalid"
                  id="footer-link"
                  target="_blank"
                  className="gap-3"
                >
                  <BsTwitter />
                </Link>
                <Link className="gap-3" id="footer-link">
                  <BsFacebook />
                </Link>
                <Link
                  to="https://app.slack.com/client/T0195LMKD1R/D04QEBN1J80/rimeto_profile/U04PQHERFM1?cdn_fallback=2"
                  id="footer-link"
                  target="_blank"
                  className="gap-3"
                >
                  <BsSlack />
                </Link>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mx-16 ">
              <h2 className="footer-title mb-3 border-b-[2px] border-b-darken w-[70%] text-2xl">
                <b>About</b>
              </h2>
              <div className="mb-3">
                {" "}
                <Link to="/about" id="footer-links">
                  About Us
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link to="checkout" id="footer-links">
                  Delivery
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Privacy Policy</Link>{" "}
              </div>
              {/* <div className='mb-3'> <Link id='footer-links'>Terms & Conditions</Link>  </div> */}
              {/* <div className='mb-3'> <Link id='footer-links'>Fee Policy</Link>  </div> */}
            </div>
            <div className="col-md-2 col-lg-2 mx-16">
              <h2 className="footer-title mb-3 border-b-[2px] border-b-darken w-[95%] text-2xl">
                <b>Account</b>
              </h2>
              {/* <div className='mb-3'> <Link to='/login' id='footer-links'>Profile</Link>  </div> */}
              <div className="mb-3">
                {" "}
                <Link to="/cart" id="footer-links">
                  View Cart
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link to="/contact" id="footer-links">
                  Help
                </Link>{" "}
              </div>
              {/* <div className='mb-3'> <Link id='footer-links'>Payments</Link>  </div> */}
              {/* <div className='mb-3'> <Link id='footer-links'>My Wishlist</Link>  </div> */}
              {/* <div className='mb-3'> <Link id='footer-links'>Coupons</Link> </div> */}
            </div>
            {/* <div className="col-md-4 col-lg-4">
          <h2 className='footer-title mb-3'><b>Install App</b></h2>
          <p className='mb-3'>Available On Google Play Services & App Store</p>
          <div className="className='mb-3 col-md-6 col-12 pay">
          <div className='mb-3'>
          <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
          <img src={playstore} alt="" />
          </Link>
          </div>
          <div className='mb-3'>
          <Link to='https://www.apple.com/app-store/' target='_blank'>
          <img src={appstore} alt="" />
          </Link>
          </div>
          </div>
          <p className="mb-3">
            Payment Methods
          </p>
          <div className="pay">
          <Link to='https://www.paypal.com/signin' target='_blank'>
          <img src={visa} alt="" />
          </Link>
          </div>
        </div> */}
          </div>
          <hr className="my-4" />
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <p className="text-center md:text-left">
                &copy; Developed by Piyush Dhande 2024
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <Link to="#" className="text-gray-700 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-700 hover:text-gray-900">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-700 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
