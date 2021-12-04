import React from "react";
import NavBar from "../navBar/NavBar";
import SiderBar from "../sideBar/SiderBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-12 mx-auto h-full min-h-screen w-full">
      <div className="col-span-12 md:col-span-3 bg-primary-dark p-3 border-r border-gray-500 ">
        <SiderBar />
      </div>
      <div className=" col-span-12 md:col-span-9 bg-primary-light">
        <NavBar />

        {children}
      </div>
    </div>
  );
};

export default Layout;
