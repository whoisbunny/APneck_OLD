import { BiSolidCategory } from "react-icons/bi";
import { FaBloggerB, FaShoppingCart } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { MdShoppingBag, MdSpaceDashboard } from "react-icons/md";

export const submenuClass =
  "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700";
export const menuClass =
  "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";
export const menu = [
  {
    title: "Dashbord",
    icon: <MdSpaceDashboard className={menuClass} />,
    key: "/admin",
  },
  // {
  //   title: "E-commerce",
  //   icon: <FaShoppingCart className={menuClass} />,
  //   key: "data",
  // },
  {
    title: "Products",
    icon: <MdShoppingBag className={menuClass} />,
    key:"product"
    // submenu: [
    //   {
    //     subTitle: "Add Products",
    //     subkey: "product",
    //   },
    //   {
    //     subTitle: "Add Products",
    //     subkey: "product",
    //   },
    // ],
  },
  {
    title: "Categories",
    icon: <BiSolidCategory className={menuClass} />,
    key:"category",
  },
  {
    title: "Blogs",
    icon: <FaBloggerB className={menuClass} />,
    key:"blog",
  },
  {
    title: "Users",
    icon: <HiUsers className={menuClass} />,
    key:"user",
  },
];

