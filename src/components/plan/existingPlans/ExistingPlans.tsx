import React, { Dispatch, SetStateAction } from "react";
import SinglePlan from "../../theme/plan/SinglePlan";
import styles from "./ExistingPlan.module.css";

type ExistingPlansProps = {
  setRender: Dispatch<SetStateAction<string>>;
};

const ExistingPlans = ({ setRender }: ExistingPlansProps) => {
  return (
    <div className="flex flex-col py-5 px-8">
      <h2 className="text-3xl font-semibold  text-fontColor">
        Renew or Add up to Existing plans
      </h2>
      <div className="mt-2">
        <h4 className="text-xl font-semibold text-fontColor">
          Current plan :{" "}
          <span className="text-lg font-normal  text-fontColor">Standard</span>
        </h4>
      </div>

      <div
        className={`py-8 mb-12 flex items-center overflow-x-scroll overflow-y-hidden ${styles.plansContainer}`}
      >
        <div className="mr-6">
          <SinglePlan />
        </div>
        <div className="mr-6">
          <SinglePlan />
        </div>
        <div className="mr-6">
          <SinglePlan />
        </div>
        <div className="mr-6">
          <SinglePlan />
        </div>
        <div className="mr-6">
          <SinglePlan />
        </div>
      </div>
    </div>
  );
};

export default ExistingPlans;
