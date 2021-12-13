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

const menuList = [
  {
    name: "Draft",
    icon: draft,
    amount: 210,
  },
  {
    name: "Unprocessed",
    icon: process,
    amount: 10,
  },
  {
    name: "Queries",
    icon: query,
    amount: 2,
  },
  {
    name: "Approved",
    icon: approved,
    amount: 10,
  },
  {
    name: "Rejected",
    icon: reject,
    amount: 1,
  },
  {
    name: "Enhance",
    icon: enhance,
    amount: 20,
  },
  {
    name: "FCI",
    icon: fci,
    amount: 10,
  },

  {
    name: "Discharge Approved",
    icon: dischargedApproved,
    amount: 20,
  },
  {
    name: "Settle",
    icon: approved,
    amount: 50,
  },
];

const Home = () => {
  return (
    <div className="p-10 flex flex-wrap mx-auto">
      {menuList?.map((menu, index) => {
        return (
          <div key={index} className="pr-8 pb-8">
            <HomeCard
              name={menu?.name}
              icon={menu?.icon}
              amount={menu?.amount}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
