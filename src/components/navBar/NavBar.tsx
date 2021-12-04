import React from "react";
import { BiLink, BiBell } from "react-icons/bi";
import userImage from "../../assets/images/user.jpg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-primary px-4 py-3  border-b border-gray-500">
      <p className="text-lg text-fontColor ">Hello, Josh Steve</p>
      <div className="flex items-center">
        <BiLink className="mr-3 text-fontColor text-lg" />
        <div className="relative">
          <BiBell className="mr-3 text-fontColor text-lg" />
          <span className="absolute h-2 w-2 bg-green-500 rounded-full top-2 right-3"></span>
        </div>
        <div className="flex items-center">
          <img
            src={userImage}
            alt="user"
            className="w-8 h-8 object-cover mr-3 rounded-full"
          />
          <div>
            <span className="block text-sm text-fontColor">Josh Steve</span>
            <span className="block text-xs text-fontColor">Staff</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
