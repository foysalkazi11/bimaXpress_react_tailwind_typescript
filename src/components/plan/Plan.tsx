import React from "react";
import OverView from "./overView/OverView";
import ManagePlan from "./managePlan/ManagePlan";
import ExistingPlans from "./existingPlans/ExistingPlans";

const Plan = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-8 py-5 px-8">
        <div className="col-span-12 xl:col-span-9">
          <OverView />
        </div>
        <div className="col-span-6 lg:col-span-4 xl:col-span-3 ">
          <ManagePlan />
        </div>
      </div>
      <div>
        <ExistingPlans />
      </div>
    </div>
  );
};

export default Plan;
