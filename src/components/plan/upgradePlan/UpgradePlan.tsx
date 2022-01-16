import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import standard from "../../../assets/icon/planBig.svg";
import premium from "../../../assets/icon/Diamond.svg";
import platinum from "../../../assets/icon/platinam.svg";
import rupi from "../../../assets/icon/rupi.svg";
import styles from "./UpgradePlan.module.css";
import PlanSelectButton from "../../theme/button/PlanSelectButton";
import axios from "axios";

const plana = [
  {
    icon: standard,
    title: "standard",
    amount: 1000,
    features: ["One year subscription", "Upto 80 claim tokens"],
  },
  {
    icon: premium,
    title: "premium",
    amount: 7000,
    features: ["Lifetime membership", "Upto 200 claim tokens"],
  },
  {
    icon: platinum,
    title: "platimum",
    amount: 14000,
    features: ["Lifetime membership", "Upto 500 claim tokens"],
  },
];

type UpgradePlanProps = {
  setCurrentPlan: Dispatch<SetStateAction<string>>;
  currentPlan: string;
};

const UpgradePlan = ({ setCurrentPlan, currentPlan }: UpgradePlanProps) => {
  const [plans, setPlans] = useState<any[]>([])
  useEffect(() => {
    axios.get(`/allplansdetails`).then(res => {
      console.log(res.data?.data);
      // setPlans(res.data?.data)
    }).catch(err => {
      console.log(err)
    })
  })
  return (
    <div className="px-8 py-6">
      <h2 className="text-3xl text-fontColor font-semibold">
        Upgrade your plan
      </h2>
      <div className="flex justify-between flex-wrap pt-8">
        {plans && plans?.map((plan, index) => {
          return (
            <div
              className={`w-full h-full border border-fontColor rounded-2xl px-4 py-6 mb-6 flex flex-col ${styles.container}`}
              key={index}
            >
              <img
                src={plan?.icon}
                alt="icon"
                className={`w-8 text-fontColor ${styles.svg}`}
              />
              <p className="font-light text-xl pt-4 text-fontColor capitalize">
                {plan?.title}
              </p>
              <div className="flex items-center pt-6">
                <img src={rupi} alt="icon" />
                <h1 className="text-6xl text-fontColor font-semibold pl-2 -mt-3">
                  {plan?.amount}
                </h1>
              </div>
              <p className="text-xs font-thin pt-8 text-fontColor">Features</p>
              <div className={`h-full ${styles.contentBox}`}>
                {plan?.features?.map((fetures: any, index: number) => {
                  return (
                    <div className="pt-4 flex items-center" key={index}>
                      <span className={styles.boldIcon}></span>
                      <p className="text-sm text-fontColor pl-2">{fetures}</p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-5">
                <PlanSelectButton
                  text="Buy now"
                  disable={plan?.title === currentPlan}
                  style={
                    plan?.title === currentPlan
                      ? { backgroundColor: "#5a5a5a", cursor: "default" }
                      : {}
                  }
                  handleClick={() => setCurrentPlan(plan?.title)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpgradePlan;
