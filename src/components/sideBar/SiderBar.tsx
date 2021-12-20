import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { BiDetail } from "react-icons/bi";
import { RiSpamLine, RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";
import { FaHospital, FaStethoscope, FaRegBuilding } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdOutlineInbox } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const homeMenu = {
  name: "Home",

  icon: <AiFillHome className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />,
  pageLink: "/",
};
const emailMenu = {
  name: "Mail",
  icon: <AiOutlineMail className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />,
  pageLink: "/mail",
};
const innerMailMenu = [
  {
    name: "Inbox",
    amount: 200,
    icon: (
      <MdOutlineInbox className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),
    pageLink: "#",
  },
  {
    name: "Sent",
    amount: 120,
    icon: <FiSend className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />,
    pageLink: "#",
  },
  {
    name: "Drafts",
    amount: 10,
    icon: (
      <IoDocumentOutline className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),
    pageLink: "#",
  },
  {
    name: "Spams",
    amount: 10,
    icon: <RiSpamLine className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />,
    pageLink: "#",
  },

  {
    name: "Deleted",
    amount: 50,
    icon: (
      <RiDeleteBinLine className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),
    pageLink: "#",
  },
];

const sideBarMenu = [
  {
    name: "Add New Case",
    icon: (
      <HiOutlineViewGridAdd className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),

    pageLink: "/newCase",
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

    pageLink: "/empanelledCompanies",
  },
  {
    name: "Order Details",
    icon: (
      <AiOutlineShoppingCart className="text-fontColor mr-4 ml-2 md:ml-5 text-xl" />
    ),

    pageLink: "/order",
  },
];

const SiderBar = () => {
  const [activeMenu, setActiveMenu] = useState(7);
  const [openEmailMenu, setOpenEmailMenu] = useState(false);
  const [activeMailMenu, setActiveMailMenu] = useState(0);

  const handleEmailMenu = (num: number) => {
    setActiveMenu(num);
    setOpenEmailMenu((pre) => !pre);
  };
  const handleActiveMenu = (num: number) => {
    setActiveMenu(num);
    if (openEmailMenu) {
      setOpenEmailMenu(false);
    }
  };
  return (
    <>
      <div className="mb-16 flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Link
          to={homeMenu?.pageLink}
          className={`flex items-center p-3 my-4 rounded ${
            activeMenu === 7 ? "bg-primary-light" : ""
          } `}
          onClick={() => handleActiveMenu(7)}
        >
          {homeMenu?.icon}
          <p className="text-fontColor font-semibold text-sm">
            {homeMenu?.name}
          </p>
        </Link>
        <Link
          to={emailMenu?.pageLink}
          className={`flex items-center justify-between p-3 my-4 rounded ${
            activeMenu === 8 ? " bg-secondary-light" : ""
          } `}
          onClick={() => handleEmailMenu(8)}
        >
          <div className="flex">
            {emailMenu?.icon}
            <p className="text-fontColor font-semibold text-sm">
              {emailMenu?.name}
            </p>
          </div>
          {openEmailMenu ? (
            <IoIosArrowUp className="text-fontColor text-xl" />
          ) : (
            <IoIosArrowDown className="text-fontColor text-xl" />
          )}
        </Link>
        {openEmailMenu ? (
          <div className="border-b border-fontColor-darkGray">
            {innerMailMenu?.map((menu, index) => {
              return (
                <Link
                  to={menu?.pageLink}
                  key={index}
                  className={`flex items-center justify-between p-3 my-2 rounded ${
                    index === activeMailMenu ? "bg-primary-light" : ""
                  }`}
                  onClick={() => setActiveMailMenu(index)}
                >
                  <div className="flex">
                    {menu?.icon}
                    <p className="text-fontColor font-semibold text-sm">
                      {menu?.name}
                    </p>
                  </div>
                  <p
                    className={`text-sm font-semibold  ${
                      index === activeMailMenu
                        ? "px-2 rounded-xl bg-fontColor text-primary-dark"
                        : "text-fontColor"
                    }`}
                  >
                    {menu?.amount}
                  </p>
                </Link>
              );
            })}
          </div>
        ) : null}

        {sideBarMenu?.map((menu, index) => {
          return (
            <Link
              to={menu?.pageLink}
              key={index}
              className={`flex items-center p-3 my-4 rounded ${
                index === activeMenu ? "bg-primary-light" : ""
              } `}
              onClick={() => handleActiveMenu(index)}
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
