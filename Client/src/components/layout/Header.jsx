import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// import { CiMail } from "react-icons/ci";
// import { BiPhoneCall } from "react-icons/bi";
// import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "/assets/images/apneck.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const {totalCartProducts} = useSelector((state)=>state.cart)
 

  return (
    <>
      <header className="bg-lighter sticky top-0 z-50">
        <div className="min-w-87">
          <div className="flex items-center m-0">
            <div className="flex justify-center  md:w-1/6">
              <Link to="/">
                <img src={logo} alt="logo" className="max-w-24 h-12" />
              </Link>
            </div>
            <div className="flex md:w-5/6 lg:w-5/6">
              <div className="md:w-1/4 mx-auto">
                <div className="hidden md:flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text " id="basic-addon2">
                    search
                  </button>
                </div>
              </div>
              <div className="md:w-2/4 mx-auto">
                <div className="mt-2 hidden md:flex lg:flex">
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/"
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/product"
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/blog"
                      className={
                        location.pathname === "/blog" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/about"
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/contact"
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="md:w-1/6 mx-auto flex">
                <div className="hidden md:flex">
                  {/* <Link
                        onClick={toggleMenu}
                        to=""
                        className="flex items-center text-color-nav mr-3"
                      >
                        <CgProductHunt className="mr-1 text-4xl " />
                      </Link> */}
                </div>
                <div className="hidden md:flex">
                  <Link
                    onClick={toggleMenu}
                    to="/sign-in"
                    className="flex items-center text-color-nav mr-3"
                  >
                    <VscAccount className="mr-1 text-4xl " />
                  </Link>
                </div>
                <div className="hidden md:flex">
                  <Link
                    onClick={toggleMenu}
                    to="cart"
                    className="flex items-center text-color-nav mr-3"
                  >
                    <CgShoppingCart className="mr-1 text-4xl " />
                    <div>
                          <p className="relative flex w-full justify-center items-center">
                            {/* <b> */}
                              <span className="absolute  bg-transparent right-4 ">{totalCartProducts? totalCartProducts:0}</span>
                            {/* </b> */}
                          </p>
                        </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
