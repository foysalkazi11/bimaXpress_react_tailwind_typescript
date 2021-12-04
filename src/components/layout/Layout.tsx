import React from "react";
import NavBar from "../navBar/NavBar";
import SiderBar from "../sideBar/SiderBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-3 bg-primary-dark p-3 border-r border-gray-500">
          <SiderBar />
        </div>
        <div className=" col-span-12 sm:col-span-9">
          <div className="bg-primary px-4 py-3  border-b border-gray-500">
            <NavBar />
          </div>
          <div
            className="bg-primary-light "
            style={{ height: "auto", minHeight: "700px", width: "100%" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
