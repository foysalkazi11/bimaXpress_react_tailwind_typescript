import React from "react";
import styles from "./ManagePlan.module.css";
import PlanSelectButton from "../../theme/button/PlanSelectButton";

const ManagePlan = () => {
  return (
    <div>
      <div className="pb-5">
        <p className="text-base text-fontColor">Manage Plans</p>
      </div>
      <div className={`${styles.managePlanContainer}`}>
        <p className="text-sm text-fontColor-gray">
          Choose to Renew your plans or upgrade to get more benefits
        </p>
        <div className="mt-4">
          <PlanSelectButton outlined={true} text="Renew" />
        </div>
        <div className="mt-4">
          <PlanSelectButton text="Upgrade" />
        </div>
      </div>
    </div>
  );
};

export default ManagePlan;
