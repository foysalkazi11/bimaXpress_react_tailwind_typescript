import React from "react";
import HomeCard from "../theme/card/HomeCard";
import approved from "../../assets/icon/approved.svg";
import dischargedApproved from "../../assets/icon/dischargedApproved.svg";
// import document from "../../assets/icon/document-info.svg";
import draft from "../../assets/icon/draft.svg";
import enhance from "../../assets/icon/enhance.svg";
import fci from "../../assets/icon/fci.svg";
import query from "../../assets/icon/noun_query_3407971.svg";
import process from "../../assets/icon/process.svg";
import reject from "../../assets/icon/reject.svg";
import { Link } from "react-router-dom";

const menuList = [
  {
    name: "Draft",
    icon: draft,
    amount: 210,
    pageLink: "/drafts",
  },
  {
    name: "Unprocessed",
    icon: process,
    amount: 10,
    pageLink: "#",
  },
  {
    name: "Queries",
    icon: query,
    amount: 2,
    pageLink: "#",
  },
  {
    name: "Approved",
    icon: approved,
    amount: 10,
    pageLink: "#",
  },
  {
    name: "Rejected",
    icon: reject,
    amount: 1,
    pageLink: "#",
  },
  {
    name: "Enhance",
    icon: enhance,
    amount: 20,
    pageLink: "#",
  },
  {
    name: "FCI",
    icon: fci,
    amount: 10,
    pageLink: "#",
  },

  {
    name: "Discharge Approved",
    icon: dischargedApproved,
    amount: 20,
    pageLink: "#",
  },
  {
    name: "Settle",
    icon: approved,
    amount: 50,
    pageLink: "#",
  },
];

const Home = () => {
  return (
    <div className="p-10 flex flex-wrap mx-auto">
      {menuList?.map((menu, index) => {
        return (
          <>
            {menu?.pageLink === "#" ? (
              <div key={index} className="pr-8 pb-8">
                <HomeCard
                  name={menu?.name}
                  icon={menu?.icon}
                  amount={menu?.amount}
                />
              </div>
            ) : (
              <Link to={menu?.pageLink} key={index} className="pr-8 pb-8">
                <HomeCard
                  name={menu?.name}
                  icon={menu?.icon}
                  amount={menu?.amount}
                />
              </Link>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Home;
