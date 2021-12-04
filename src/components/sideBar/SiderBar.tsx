import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { BiDetail } from "react-icons/bi";
import { FaHospital, FaStethoscope, FaRegBuilding } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const sideBarMenu = [
  {
    name: "Home",

    icon: <AiFillHome className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />,
    pageLink: "/",
  },
  {
    name: "Mail",
    icon: (
      <AiOutlineMail className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),

    pageLink: "#",
  },
  {
    name: "Add New Case",
    icon: (
      <HiOutlineViewGridAdd className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),

    pageLink: "#",
  },
  {
    name: "Plan Details",
    icon: <BiDetail className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />,

    pageLink: "/plan",
  },
  {
    name: "Hospital",
    icon: <FaHospital className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />,

    pageLink: "/hospital",
  },
  {
    name: "Analyst",
    icon: (
      <SiSimpleanalytics className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),

    pageLink: "/analyst",
  },
  {
    name: "Doctor",
    icon: (
      <FaStethoscope className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),

    pageLink: "/doctor",
  },
  {
    name: "Empanelled Companies",
    icon: (
      <FaRegBuilding className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),

    pageLink: "#",
  },
  {
    name: "Order Details",
    icon: (
      <AiOutlineShoppingCart className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),

    pageLink: "#",
  },
];

const SiderBar = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  return (
    <>
      <div className="mb-16 flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div>
        {sideBarMenu?.map((menu, index) => {
          return (
            <Link
              to={menu?.pageLink}
              key={index}
              className={`flex items-center p-3 my-4 rounded ${
                index === activeMenu ? "bg-primary-light" : ""
              } `}
              onClick={() => setActiveMenu(index)}
            >
              {menu?.icon}
              <p className="text-fontColor font-semibold text-sm">
                {menu?.name}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SiderBar;
