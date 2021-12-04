import React from "react";
import planSmall from "../../../assets/icon/planSmall.svg";
import PlanSelectButton from "../button/PlanSelectButton";

const SinglePlan = () => {
  return (
    <div className="h-60 w-72 border border-fontColor rounded-xl p-4 flex flex-col">
      <div className="flex items-center">
        <img src={planSmall} alt="icon" className="mr-2" />
        <p className="text-lg text-fontColor"> Standard</p>
      </div>
      <div className="mt-2 flex items-start">
        <p className="text-5xl text-fontColor-gray mr-1">₹</p>
        <span className="text-2xl text-fontColor-gray font-semibold">1000</span>
      </div>
      <p className="mt-2 text-base text-fontColor">Duration : 1 year</p>
      <p className="mt-2 text-base text-fontColor">
        Ends on : 27 December 2022
      </p>

      <div className="mt-4">
        <PlanSelectButton text="Select" />
      </div>
    </div>
  );
};

export default SinglePlan;
