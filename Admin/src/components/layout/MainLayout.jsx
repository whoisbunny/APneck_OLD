import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { menu } from "../../constant";
import SwitchDark from "../SwitchDark";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { handleLogout } from "../../app/features/auth/authSlice";
const MainLayout = () => {
  const [Open, setOpen] = useState(true);
  const [OpenSub, setOpenSub] = useState(true);
  const [OpenProfile, setOpenProfile] = useState(true);
  const params = useLocation();

  const handleToggle = () => {
    setOpen(!Open);
  };
  const handleProfileToggle = () => {
    setOpenProfile(!OpenProfile);
  };
  const handleSubmenu = () => {
    setOpenSub(!OpenSub);
  };




  const navigate = useNavigate();
  const { isAuth, expiryDate } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const currentDate = dayjs();
    const targetDate = dayjs(expiryDate);
    if (!currentDate.isBefore(targetDate) || currentDate.isAfter(targetDate)) {
      dispatch(handleLogout());
      setTimeout(() => {
        navigate("/");
      }, 2500);
    }
  }, []);

  useEffect(() => {
    if (!isAuth && !expiryDate) {
      navigate("/");
    }
  }, [isAuth, navigate]);




  return (
    <>
      <header className={` flex  justify-end  `}>
        <div
          className={`text-gray-400  bg-gray-50 dark:bg-slate-800 body-font ${
            Open ? "w-[calc(100%_-_18rem)]" : "w-[calc(100%_-_5rem)]"
          }    flex flex-wrap p-5 flex-col md:flex-row sm:flex-row max-sm:flex-row items-center justify-between  transition-all duration-300     `}
        >
          <button
            type="button"
            className="inline-flex items-center bg-gray-800 border-0 py-2  px-3 focus:outline-none hover:bg-gray-700 rounded text-lg  md:mt-0 z-25 "
            onClick={handleToggle}
          >
            {Open ? (
              <IoIosArrowDropleftCircle />
            ) : (
              <IoIosArrowDroprightCircle />
            )}
          </button>
          <div className="flex gap-5">
            <SwitchDark />

            <div className="  ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  onClick={handleProfileToggle}
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <div
                className={`${
                  OpenProfile ? "hidden" : ""
                } absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <Link
                  to={"/"}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
          <aside
            id="sidebar-multi-level-sidebar"
            className={`fixed top-0 left-0   h-screen transition-all duration-300 ${
              Open ? "w-72" : "w-20"
            } sm:translate-x-0 `}
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-4 font-medium">
                <li>
                  <Link
                    to={"/admin"}
                    className={`flex items-center ${
                      !Open ? "justify-center" : ""
                    } p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                  >
                    <span
                      className={`ms-3 text-center w-full ${
                        !Open ? "hidden" : ""
                      } `}
                    >
                      WhoisBunny
                    </span>
                    <span className={`ms-3 ${Open ? "hidden" : ""} `}>WB</span>
                  </Link>
                </li>

                {menu.map((el, i) => {
                  return (
                    <>
                      {" "}
                      <li
                        key={i}
                        onClick={el.submenu ? handleSubmenu : () => {}}
                      >
                        <NavLink
                          key={i}
                          to={el?.key}
                          className={`${
                            params.pathname === `${el?.key}` ? "active" : ""
                          } flex items-center ${
                            !Open ? "justify-center" : ""
                          } p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group `}
                          // onClick={() => setActiveNav(`/${el?.key}`)}
                        >
                          {el?.icon}
                          <span className={`ms-3    ${!Open ? "hidden" : ""} `}>
                            {el?.title}
                          </span>
                          {el?.submenu ? (
                            <>
                              <div
                                className={`${
                                  !Open ? "hidden" : ""
                                } flex  w-full justify-end`}
                              >
                                <>
                                  <div onClick={handleSubmenu}>
                                    {OpenSub ? (
                                      <MdKeyboardArrowDown />
                                    ) : (
                                      <MdKeyboardArrowUp />
                                    )}
                                  </div>
                                </>
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </NavLink>

                        {el?.submenu ? (
                          <>
                            <ul
                              id="dropdown-example"
                              className={`${
                                OpenSub ? "hidden" : ""
                              } py-2 space-y-2 ${!Open ? "hidden" : ""}`}
                            >
                              {el?.submenu?.map((e, i) => {
                                return (
                                  <>
                                    <li key={i}>
                                      <Link
                                        to={e?.subkey}
                                        type="button"
                                        className={`${
                                          params.pathname === `${e?.subkey}`
                                            ? "active"
                                            : ""
                                        } flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
                                      >
                                        {e?.subTitle}
                                      </Link>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </>
                        ) : (
                          ""
                        )}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </header>

      <div
        className={` ${
          Open ? "w-[calc(100%_-_18rem)]" : "w-[calc(100%_-_5rem)]"
        } float-end duration-300 transition-all bg-slate-100 dark:text-gray-200   overlay dark:bg-slate-900   inset-0 z-[999]
`}
      >
        <div className="mb-12 ">
          <Outlet />
        </div>
        <div
          className={` ${
            Open ? "w-[calc(100%_-_18rem)]" : "w-[calc(100%_-_5rem)]"
          } h-12 w-full bg-white       dark:bg-slate-800 grid items-center`}
        >
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
